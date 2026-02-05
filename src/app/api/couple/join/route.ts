import { database } from "@/database";
import { auth } from "@/lib/auth-server";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const body = await request.json();
    const { inviteCode } = body;
    const session = await auth.getSession();

    if (!session?.data?.user) {
        throw new Error("Unauthorized");
    }

    if (!inviteCode) {
        return NextResponse.json({ success: false, error: "Código de convite obrigatório" });
    }

    try {
        await database.$connect();

        const user = await database.user.findUnique({
            where: { id: session.data.user.id }
        });

        if (!user) {
            return NextResponse.json({ success: false, error: "Usuário não encontrado" });
        }

        const couple = await database.couple.findUnique({
            where: { inviteCode: inviteCode.toUpperCase() }
        });

        if (!couple) {
            return NextResponse.json({ success: false, error: "Código inválido ou casal não encontrado." });
        }

        // Connect user to couple
        await database.user.update({
            where: { id: user.id },
            data: {
                coupleId: couple.id
            }
        });

        return NextResponse.json({ success: true, homeId: couple.id });
    } catch (error) {
        console.error("Failed to join home:", error);
        return NextResponse.json({ success: false, error: "Falha ao entrar no casal" });
    }
}
