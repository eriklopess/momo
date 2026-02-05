import { Mail } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function VerifyPage() {
    return (
        <main className="min-h-screen flex items-center justify-center p-6 bg-muted/40">
            <div className="w-full max-w-md space-y-8 bg-background p-10 rounded-2xl border shadow-sm text-center">
                <div className="flex justify-center">
                    <div className="h-16 w-16 rounded-full bg-blue-50 flex items-center justify-center">
                        <Mail className="h-8 w-8 text-blue-500" />
                    </div>
                </div>

                <div className="space-y-3">
                    <h1 className="text-2xl font-bold tracking-tight">Verifique seu email</h1>
                    <p className="text-muted-foreground text-lg">
                        Enviamos um link mágico para você. <br />
                        Abra sua caixa de entrada e clique para entrar.
                    </p>
                </div>

                <div className="pt-4">
                    <Button variant="outline" asChild className="w-full">
                        <Link href="/login">
                            Voltar para o login
                        </Link>
                    </Button>
                </div>
            </div>
        </main>
    );
}
