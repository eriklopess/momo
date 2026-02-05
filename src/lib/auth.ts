import { NextAuthOptions } from "next-auth";
import EmailProvider from "next-auth/providers/email";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { Resend } from "resend";
import { prisma } from "@/database";
import { Adapter } from "next-auth/adapters";

const resend = new Resend(process.env.RESEND_API_KEY);

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma) as Adapter,
    session: { strategy: "database" },
    providers: [
        EmailProvider({
            from: process.env.EMAIL_FROM,
            async sendVerificationRequest({ identifier, url }) {
                const { EmailTemplate } = await import("@/components/email-template");

                await resend.emails.send({
                    from: 'Momo <delivered@resend.dev>',
                    to: identifier,
                    subject: "Seu link de acesso ao Momo",
                    react: EmailTemplate({ url }) as React.ReactElement,
                });
            },
        }),
    ],
    pages: {
        signIn: "/login",
        verifyRequest: "/verify",
    },
};  
