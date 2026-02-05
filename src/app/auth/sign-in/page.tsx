"use client";

import { SignInForm } from "@neondatabase/auth/react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, Quote, TrendingUp, Heart } from "lucide-react";

export default function SignInPage() {
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
                        <h1 className="text-3xl font-bold tracking-tight text-primary">Momo</h1>
                        <h2 className="mt-2 text-muted-foreground">Bem-vindo de volta! Senti sua falta.</h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="auth-wrapper"
                    >
                        <SignInForm
                            localization={{
                                SIGN_IN: "Entrar",
                                EMAIL: "Email",
                                PASSWORD: "Senha",
                                FORGOT_PASSWORD_LINK: "Esqueceu a senha?",
                                INVALID_EMAIL: "Email inválido",
                                INVALID_PASSWORD: "Senha inválida",
                                UNAUTHORIZED_SESSION: "Sessão não autorizada",
                                CREDENTIAL_ACCOUNT_NOT_FOUND: "Conta não encontrada",
                                PASSWORD_PLACEHOLDER: "Digite sua senha",
                                EMAIL_PLACEHOLDER: "Digite seu email",
                                SIGN_IN_ACTION: "Entrar",
                                PASSWORD_REQUIRED: "Senha é obrigatória",
                                EMAIL_REQUIRED: "Email é obrigatório",
                            }}
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="mt-6 text-center text-sm"
                    >
                        <span className="text-muted-foreground">Não tem uma conta? </span>
                        <Link
                            href="/auth/sign-up"
                            className="text-primary hover:text-primary/80 font-medium transition-colors hover:underline"
                        >
                            Bora criar uma conta!
                        </Link>
                    </motion.div>

                    <div className="mt-12 text-xs text-muted-foreground text-center">
                        Ao entrar, você concorda com nossos <Link href="#" className="underline">Termos</Link> e <Link href="#" className="underline">Privacidade</Link>.
                    </div>
                </div>
            </div>

            {/* Right Side - Visual Showcase */}
            <div className="relative hidden w-1/2 flex-col items-center justify-center overflow-hidden bg-black lg:flex">
                {/* Aurora Background */}
                <div className="absolute inset-0">
                    <div className="absolute top-[-50%] left-[-10%] w-[120%] h-[120%] bg-[radial-gradient(ellipse_at_center,rgba(123,44,191,0.3),transparent_70%)] animate-aurora opacity-60 blur-3xl pointer-events-none" />
                    <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                </div>

                {/* Floating Orbs */}
                <motion.div
                    animate={{ y: [0, -20, 0], opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-24 right-20 w-64 h-64 rounded-full bg-primary/10 blur-[80px]"
                />
                <motion.div
                    animate={{ y: [0, 20, 0], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-24 left-20 w-48 h-48 rounded-full bg-purple-500/10 blur-[60px]"
                />

                {/* Content Container */}
                <div className="relative z-10 max-w-md text-center p-8">

                    {/* Floating Cards / Icons */}
                    <div className="relative h-64 w-full mb-12">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4, type: "spring" }}
                            className="absolute top-0 left-0 glass p-4 rounded-2xl flex items-center gap-3 border border-white/10"
                        >
                            <div className="bg-green-500/20 p-2 rounded-lg text-green-400">
                                <TrendingUp className="w-5 h-5" />
                            </div>
                            <div className="text-left">
                                <p className="text-xs text-muted-foreground">Economia Mensal</p>
                                <p className="font-bold text-white">+24%</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6, type: "spring" }}
                            className="absolute bottom-10 right-0 glass p-4 rounded-2xl flex items-center gap-3 border border-white/10"
                        >
                            <div className="bg-pink-500/20 p-2 rounded-lg text-pink-400">
                                <Heart className="w-5 h-5" />
                            </div>
                            <div className="text-left">
                                <p className="text-xs text-muted-foreground">Objetivos de Casal</p>
                                <p className="font-bold text-white">3 Concluídos</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.8 }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                        >
                            <div className="w-24 h-24 rounded-full glass flex items-center justify-center border border-white/20 shadow-[0_0_30px_rgba(123,44,191,0.5)]">
                                <Sparkles className="w-10 h-10 text-primary" />
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="glass rounded-2xl p-6 border border-white/5 bg-black/40 backdrop-blur-md"
                    >
                        <Quote className="w-8 h-8 text-primary/50 mb-4 mx-auto" />
                        <p className="text-lg font-medium text-white/90 italic mb-4">
                            "O Momo transformou completamente como organizamos nossa vida a dois. É simples, bonito e funcional."
                        </p>
                        <div className="flex items-center justify-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-purple-400" />
                            <div className="text-left text-sm">
                                <p className="font-bold text-white">Ricardo & Julia</p>
                                <p className="text-white/50">Usuários Premium</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}