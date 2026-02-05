"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { ArrowLeft, Loader2, Sparkles } from "lucide-react";

export default function RegisterPage() {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    async function onSubmit(e: React.FormEvent) {
        e.preventDefault();
        setLoading(true);
        await authClient.signIn.magicLink({
            email,
            callbackURL: "/dashboard"
        });
        setLoading(false);
    }

    return (
        <main className="min-h-screen grid lg:grid-cols-2">
            {/* Left Side - Visual (Switched for Register to vary layout slightly or could keep same) - Keeping consistent Right Side Visual for Split */}
            {/* Let's flip it for variety? Or keep standard? Standard is better for consistency. */}

            {/* Left Side - Form */}
            <div className="flex items-center justify-center p-8 bg-background">
                <div className="w-full max-w-sm space-y-8">
                    <div className="space-y-2">
                        <Link
                            href="/"
                            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors mb-6"
                        >
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Voltar para o início
                        </Link>
                        <h1 className="text-3xl font-bold tracking-tight">Crie sua conta</h1>
                        <p className="text-muted-foreground">
                            Comece sua jornada conjunta. Digite seu email para criar uma conta.
                        </p>
                    </div>

                    <form onSubmit={onSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                placeholder="nome@exemplo.com"
                                type="email"
                                autoCapitalize="none"
                                autoComplete="email"
                                autoCorrect="off"
                                disabled={loading}
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <Button className="w-full" disabled={loading}>
                            {loading ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Criando conta...
                                </>
                            ) : (
                                "Criar com Email"
                            )}
                        </Button>
                    </form>

                    <div className="text-center text-sm text-muted-foreground">
                        Já tem uma conta?{" "}
                        <Link href="/login" className="underline hover:text-primary">
                            Entrar
                        </Link>
                    </div>
                </div>
            </div>

            {/* Right Side - Visual */}
            <div className="hidden lg:flex flex-col items-center justify-center p-12 bg-muted text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-zinc-900" />
                {/* Optional: Add a subtle gradient or pattern overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/20 to-purple-500/0" />

                <div className="relative z-10 max-w-lg text-center space-y-6">
                    <div className="flex justify-center mb-4">
                        <div className="h-12 w-12 rounded-xl bg-primary/20 flex items-center justify-center">
                            <Sparkles className="h-6 w-6 text-primary" />
                        </div>
                    </div>
                    <h2 className="text-3xl font-bold">Comece algo especial</h2>
                    <p className="text-lg text-zinc-400">
                        "Construir uma vida juntos é a maior aventura que podemos empreender."
                    </p>
                </div>
            </div>
        </main>
    );
}
