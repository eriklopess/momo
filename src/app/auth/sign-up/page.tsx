"use client";

import { SignUpForm } from "@neondatabase/auth/react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, Star, Users, ArrowRight } from "lucide-react";

export default function SignUpPage() {
    return (
        <div className="flex min-h-screen w-full">

            {/* Left Side - Form */}
            <div className="flex w-full flex-col justify-center px-8 py-12 lg:w-1/2 lg:px-12 xl:px-24 bg-background z-10 transition-colors duration-500">
                <div className="mx-auto w-full max-w-sm">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="mb-8"
                    >
                        <h1 className="text-3xl font-bold tracking-tight text-primary">momo app</h1>
                        <h2 className="mt-2 text-muted-foreground">Comece a organizar sua vida hoje.</h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="auth-wrapper"
                    >
                        <SignUpForm
                            localization={{
                                SIGN_UP: "Criar Conta",
                                EMAIL: "Email",
                                PASSWORD: "Senha",
                                NAME: "Nome Completo",
                                PASSWORD_REQUIRED: "Senha é obrigatória",
                                PASSWORD_TOO_SHORT: "Senha deve ter pelo menos 8 caracteres",
                                PASSWORD_TOO_LONG: "Senha deve ter no máximo 128 caracteres",
                                USER_ALREADY_EXISTS: "Usuário já existe. Use outro email.",
                            }}
                            passwordValidation={{
                                minLength: 8,
                                maxLength: 128,
                            }}
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="mt-6 text-center text-sm"
                    >
                        <span className="text-muted-foreground">Já tem uma conta? </span>
                        <Link
                            href="/auth/sign-in"
                            className="text-primary hover:text-primary/80 font-medium transition-colors hover:underline"
                        >
                            Entrar agora
                        </Link>
                    </motion.div>

                    <div className="mt-12 text-xs text-muted-foreground text-center">
                        Ao se registrar, você concorda com nossos <Link href="#" className="underline">Termos</Link> e <Link href="#" className="underline">Privacidade</Link>.
                    </div>
                </div>
            </div>

            <div className="relative hidden w-1/2 flex-col items-center justify-center overflow-hidden bg-black lg:flex">
                <div className="absolute inset-0">
                    <div className="absolute top-[-50%] right-[-10%] w-[120%] h-[120%] bg-[radial-gradient(ellipse_at_center,rgba(123,44,191,0.3),transparent_70%)] animate-aurora opacity-60 blur-3xl pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                </div>

                <motion.div
                    animate={{ y: [0, 20, 0], opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 left-1/4 w-56 h-56 rounded-full bg-primary/10 blur-[80px]"
                />
                <motion.div
                    animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full bg-purple-500/10 blur-[60px]"
                />

                <div className="relative z-10 max-w-md text-center p-8">

                    <div className="relative h-64 w-full mb-12">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4, type: "spring" }}
                            className="absolute top-0 right-0 glass p-4 rounded-2xl flex items-center gap-3 border border-white/10"
                        >
                            <div className="bg-yellow-500/20 p-2 rounded-lg text-yellow-400">
                                <Star className="w-5 h-5" />
                            </div>
                            <div className="text-left">
                                <p className="text-xs text-muted-foreground">Avaliação</p>
                                <p className="font-bold text-white">4.9/5.0</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6, type: "spring" }}
                            className="absolute bottom-10 left-0 glass p-4 rounded-2xl flex items-center gap-3 border border-white/10"
                        >
                            <div className="bg-blue-500/20 p-2 rounded-lg text-blue-400">
                                <Users className="w-5 h-5" />
                            </div>
                            <div className="text-left">
                                <p className="text-xs text-muted-foreground">Comunidade</p>
                                <p className="font-bold text-white">10k+ Casais</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.8 }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                        >
                            <div className="w-24 h-24 rounded-full glass flex items-center justify-center border border-white/20 shadow-[0_0_30px_rgba(123,44,191,0.5)]">
                                <ArrowRight className="w-10 h-10 text-primary -rotate-45" />
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="glass rounded-2xl p-6 border border-white/5 bg-black/40 backdrop-blur-md"
                    >
                        <p className="text-lg font-medium text-white/90 mb-2">
                            Comece a organizar suas finanças em minutos.
                        </p>
                        <p className="text-sm text-white/50">
                            Junte-se a milhares de casais que já estão transformando sua vida financeira com o Momo.
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}