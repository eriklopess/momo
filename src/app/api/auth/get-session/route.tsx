import { auth } from "@/lib/auth-server";

export async function GET() {
    try {
        const { data: session } = await auth.getSession();

        if (!session?.user) {
            return Response.json({ error: 'Unauthenticated' }, { status: 401 });
        }

        return Response.json({ session: session.session, user: session.user });
    } catch (error) {
        console.error('Error getting session:', error);
        return Response.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}