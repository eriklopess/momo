import { database } from "@/database";
import { auth } from "@/lib/auth-server";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const body = await request.json();
    const { homeName, emoji, startDate, partnerEmail } = body;
    const session = await auth.getSession();

    if (!session?.data?.user) {
        throw new Error("Unauthorized");
    }

    try {
        await database.$connect();

        const user = await database.user.findUnique({
            where: { id: session.data.user.id }
        });

        if (!user) {
            return NextResponse.json({ success: false, error: "User not found" });
        }

        // Generate a random 6-character code (uppercase alphanumeric)
        const inviteCode = Math.random().toString(36).substring(2, 8).toUpperCase();

        const home = await database
            .couple.create({
                data: {
                    name: homeName,
                    emoji: emoji,
                    startDate: startDate ? new Date(startDate) : null,
                    inviteCode: inviteCode,
                    users: {
                        connect: { id: user.id }
                    }
                }
            });

        if (partnerEmail) {
            try {
                const { resend } = await import("@/lib/email");
                const { InviteEmail } = await import("@/components/emails/invite-email");

                await resend.emails.send({
                    from: 'Momo <onboarding@resend.dev>', // Update this if user has a domain
                    to: partnerEmail,
                    subject: `Convite para se juntar ao ${homeName}`,
                    react: InviteEmail({
                        inviteCode,
                        inviterName: session.data.user.name || "Seu amor",
                        homeName
                    })
                });
                console.log(`[Invite] Email sent to ${partnerEmail}`);
            } catch (emailError) {
                console.error("Failed to send invite email:", emailError);
                // Don't fail the request if email fails, just log it
            }
        }

        return NextResponse.json({ success: true, homeId: home.id });
    } catch (error) {
        console.error("Failed to setup home:", error);
        return NextResponse.json({ success: false, error: "Failed to create home" });
    }
}