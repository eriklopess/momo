import NextAuth from "next-auth";
import EmailProvider from "next-auth/providers/email";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/database";

const handler = NextAuth({
    adapter: PrismaAdapter(prisma),
    session: { strategy: "database" },
    providers: [
        EmailProvider({
            from: process.env.EMAIL_FROM,
            sendVerificationRequest({ identifier, url, provider }) {
                console.log('sendVerificationRequest', identifier, url, provider)
            },
        }),
    ],
});

export { handler as GET, handler as POST };
