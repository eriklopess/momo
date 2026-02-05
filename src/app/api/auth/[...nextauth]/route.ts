import NextAuth from "next-auth";
import EmailProvider from "next-auth/providers/email";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/db";

export const { handlers, auth } = NextAuth({
    adapter: PrismaAdapter(prisma),
    session: { strategy: "database" },
    providers: [
        EmailProvider({
            from: process.env.EMAIL_FROM,
            // NextAuth usa nodemailer por padrão; alternativa mais simples:
            // usar Resend via sendVerificationRequest custom (recomendado no MVP)
        }),
    ],
});
export const { GET, POST } = handlers;
