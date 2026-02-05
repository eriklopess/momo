import { auth } from "@/lib/auth-server";
import { database } from "@/database";
import { redirect } from "next/navigation";

export default async function SetupLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await auth.getSession();

    if (session?.data?.user?.id) {
        const user = await database.user.findUnique({
            where: { id: session.data.user.id },
            select: { coupleId: true }
        });

        if (user?.coupleId) {
            redirect("/dashboard");
        }
    }

    return <>{children}</>;
}
