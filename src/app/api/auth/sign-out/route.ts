import { auth } from "@/lib/auth-server";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    await auth.signOut({
        fetchOptions: {
            headers: {
                cookie: request.headers.get("cookie") ?? "",
            },
        },
    });

    return NextResponse.json({ success: true });
}