import { database } from "@/database";
import { auth } from "@/lib/auth-server";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { email, password, name } = body;

        const response = await auth.signUp.email({
            email,
            password,
            name,
        });

        const user = await database.user.create({
            data: {
                id: response.data?.user.id,
                name,
                email,
            }
        });

        await database.account.create({
            data: {
                userId: user.id,
                type: "email",
                provider: "email",
                providerAccountId: user.id,
            }
        });

        if (!user) {
            throw new Error("User not found");
        }

        if (response.error?.status === 422) {
            console.log(response.error);
            return NextResponse.json({
                message: "Usuário já existe. Use outro email.",
                status: response.error.status,
                statusText: response.error.statusText,
                code: response.error.code,
            }, { status: response.error.status });
        }

        if (response.error?.status === 500) {
            console.log(response.error);
            return NextResponse.json({ error: "Ocorreu um erro inesperado. Tente novamente mais tarde." }, { status: 500 });
        }

        return NextResponse.json(response);
    } catch (error) {
        return NextResponse.json({ error: "Ocorreu um erro inesperado. Tente novamente mais tarde." }, { status: 500 });
    }
}
