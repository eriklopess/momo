import { auth } from "@/lib/auth-server";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { email, password } = body;

        const response = await auth.signIn.email({
            email,
            password,
        });

        if (response.error?.status === 401) {
            console.log(response.error);
            return NextResponse.json({ message: "Email ou senha inválidos.", status: response.error.status, statusText: response.error.statusText, code: response.error.code }, { status: response.error.status });
        }

        return NextResponse.json(response);
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Ocorreu um erro inesperado. Tente novamente mais tarde.", status: 500, statusText: "Internal Server Error", code: "INTERNAL_SERVER_ERROR" }, { status: 500 });
    }
}
