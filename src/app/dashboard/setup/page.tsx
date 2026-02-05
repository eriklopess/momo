"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { ArrowRight, Heart, Home, Mail, Check, Calendar, Sparkles, UserPlus, PlusCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export default function SetupPage() {
    const router = useRouter();
    const [mode, setMode] = useState<"initial" | "create" | "join">("initial");
    const [step, setStep] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [joinCode, setJoinCode] = useState("");

    // Skip setup and go to dashboard
    const handleSkip = () => {
        router.push("/dashboard");
    };

    const [formData, setFormData] = useState({
        homeName: "",
        emoji: "🏡",
        startDate: "",
        partnerEmail: ""
    });

    const totalSteps = 3;

    const handleNext = async () => {
        if (step < totalSteps) {
            setStep(step + 1);
        } else {
            setIsLoading(true);
            try {
                const result = await fetch("/api/couple/setup", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        homeName: formData.homeName,
                        emoji: formData.emoji,
                        startDate: formData.startDate,
                        partnerEmail: formData.partnerEmail
                    })
                });

                const data = await result.json();

                if (data.success) {
                    router.push("/dashboard");
                } else {
                    alert("Erro ao salvar: " + data.error);
                }
            } catch (error) {
                console.error(error);
                alert("Ocorreu um erro. Tente novamente.");
            } finally {
                setIsLoading(false);
            }
        }
    };

    const handleJoin = async () => {
        setIsLoading(true);
        try {
            const result = await fetch("/api/couple/join", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ inviteCode: joinCode })
            });

            const data = await result.json();

            if (data.success) {
                router.push("/dashboard");
            } else {
                alert("Erro ao entrar: " + data.error);
            }
        } catch (error) {
            console.error(error);
            alert("Ocorreu um erro ao tentar entrar.");
        } finally {
            setIsLoading(false);
        }
    };

    const updateForm = (key: string, value: any) => {
        setFormData(prev => ({ ...prev, [key]: value }));
    };

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 50 : -50,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (direction: number) => ({
            x: direction < 0 ? 50 : -50,
            opacity: 0,
        }),
    };

    return (
        <div className="min-h-screen bg-black flex items-center justify-center p-6 relative overflow-hidden">
            {/* Background Effects */}
            <div className="fixed inset-0 z-0">
                <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-purple-900/20 blur-[120px] rounded-full pointer-events-none" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
            </div>

            <div className="w-full max-w-lg relative z-10">
                {/* Header */}
                <div className="text-center mb-10">
                    <div className="inline-flex items-center justify-center p-3 rounded-full bg-white/5 border border-white/10 mb-4 backdrop-blur-xl">
                        <Sparkles className="w-6 h-6 text-primary" />
                    </div>
                    <h1 className="text-3xl font-bold text-white mb-2">
                        {mode === "initial" ? "Bem-vindo ao Momo" : mode === "join" ? "Entrar num casal" : "Criar Novo Casal"}
                    </h1>
                    {mode === "create" && (
                        <div className="flex justify-center gap-2 mt-4">
                            {[1, 2, 3].map((i) => (
                                <div
                                    key={i}
                                    className={cn(
                                        "h-1.5 rounded-full transition-all duration-300",
                                        i <= step ? "w-8 bg-primary" : "w-2 bg-white/10"
                                    )}
                                />
                            ))}
                        </div>
                    )}

                    <button
                        onClick={handleSkip}
                        className="mt-6 text-xs text-muted-foreground hover:text-white transition-colors underline decoration-muted-foreground/50 hover:decoration-white underline-offset-4"
                    >
                        Pular configuração por enquanto
                    </button>
                </div>

                {/* Main Content Area */}
                <div className="glass p-8 rounded-3xl border border-white/10 shadow-2xl min-h-[400px] flex flex-col relative overflow-hidden transition-all">

                    {mode === "initial" && (
                        <div className="flex flex-col gap-4 flex-1 justify-center">
                            <button
                                onClick={() => setMode("create")}
                                className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all flex items-center gap-4 text-left"
                            >
                                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                    <PlusCircle className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white text-lg">Criar Novo Casal</h3>
                                    <p className="text-sm text-muted-foreground">Começar uma nova jornada do zero.</p>
                                </div>
                            </button>

                            <button
                                onClick={() => setMode("join")}
                                className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all flex items-center gap-4 text-left"
                            >
                                <div className="h-12 w-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                                    <UserPlus className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white text-lg">Entrar com Código</h3>
                                    <p className="text-sm text-muted-foreground">Tenho um convite do meu amor.</p>
                                </div>
                            </button>
                        </div>
                    )}

                    {mode === "join" && (
                        <div className="flex flex-col flex-1">
                            <div className="mb-6">
                                <h2 className="text-2xl font-semibold text-white mb-2">Digite o Código</h2>
                                <p className="text-muted-foreground">Peça o código de 6 dígitos para seu parceiro(a).</p>
                            </div>

                            <div className="flex-1 flex flex-col justify-center">
                                <input
                                    type="text"
                                    maxLength={6}
                                    value={joinCode}
                                    onChange={(e) => setJoinCode(e.target.value.toUpperCase())}
                                    placeholder="Ex: MOMO12"
                                    className="w-full text-center text-4xl tracking-[0.5em] font-mono bg-white/5 border border-white/10 rounded-xl px-4 py-8 text-white placeholder:text-muted-foreground/30 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all uppercase"
                                />
                            </div>

                            <div className="mt-8 flex gap-3">
                                <button
                                    onClick={() => setMode("initial")}
                                    className="px-4 py-3 rounded-xl bg-white/5 text-white hover:bg-white/10 transition-colors"
                                >
                                    Voltar
                                </button>
                                <button
                                    onClick={handleJoin}
                                    disabled={isLoading || joinCode.length < 3}
                                    className="flex-1 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-xl py-3 transition-all disabled:opacity-50 disabled:pointer-events-none"
                                >
                                    {isLoading ? "Entrando..." : "Entrar no Casal"}
                                </button>
                            </div>
                        </div>
                    )}

                    {mode === "create" && (
                        <>
                            <AnimatePresence mode="wait" custom={step}>
                                {step === 1 && (
                                    <motion.div
                                        key="step1"
                                        custom={step}
                                        variants={variants}
                                        initial="enter"
                                        animate="center"
                                        exit="exit"
                                        transition={{ duration: 0.3 }}
                                        className="flex-1 flex flex-col"
                                    >
                                        <div className="mb-6">
                                            <h2 className="text-2xl font-semibold text-white mb-2">Qual o nome do seu lar?</h2>
                                            <p className="text-muted-foreground">Dê um nome especial para o espaço de vocês.</p>
                                        </div>

                                        <div className="space-y-6 flex-1">
                                            <div>
                                                <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2 block">
                                                    Nome da Casa
                                                </label>
                                                <div className="relative">
                                                    <input
                                                        type="text"
                                                        value={formData.homeName}
                                                        onChange={(e) => updateForm("homeName", e.target.value)}
                                                        placeholder="Ex: Castelo do Erik"
                                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all pl-12"
                                                    />
                                                    <Home className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                                </div>
                                            </div>

                                            <div>
                                                <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2 block">
                                                    Escolha um Emoji
                                                </label>
                                                <div className="flex gap-4">
                                                    {["🏡", "🏰", "🏝️", "🎪", "🚀"].map((emoji) => (
                                                        <button
                                                            key={emoji}
                                                            onClick={() => updateForm("emoji", emoji)}
                                                            className={cn(
                                                                "h-12 w-12 rounded-xl border flex items-center justify-center text-2xl transition-all",
                                                                formData.emoji === emoji
                                                                    ? "bg-primary/20 border-primary shadow-[0_0_15px_rgba(123,44,191,0.3)] scale-110"
                                                                    : "bg-white/5 border-white/10 hover:bg-white/10"
                                                            )}
                                                        >
                                                            {emoji}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}

                                {step === 2 && (
                                    <motion.div
                                        key="step2"
                                        custom={step}
                                        variants={variants}
                                        initial="enter"
                                        animate="center"
                                        exit="exit"
                                        transition={{ duration: 0.3 }}
                                        className="flex-1 flex flex-col"
                                    >
                                        <div className="mb-6">
                                            <h2 className="text-2xl font-semibold text-white mb-2">Quando tudo começou?</h2>
                                            <p className="text-muted-foreground">Vamos contar os dias dessa jornada juntos.</p>
                                        </div>

                                        <div className="space-y-6 flex-1">
                                            <div>
                                                <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2 block">
                                                    Data de Início
                                                </label>
                                                <div className="relative">
                                                    <input
                                                        type="date"
                                                        value={formData.startDate}
                                                        onChange={(e) => updateForm("startDate", e.target.value)}
                                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all pl-12 [color-scheme:dark]"
                                                    />
                                                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                                </div>
                                            </div>

                                            <div className="p-4 rounded-xl bg-gradient-to-br from-pink-500/10 to-purple-500/10 border border-pink-500/20 flex items-center gap-4">
                                                <div className="h-10 w-10 rounded-full bg-pink-500/20 flex items-center justify-center">
                                                    <Heart className="w-5 h-5 text-pink-400 fill-pink-400" />
                                                </div>
                                                <div>
                                                    <p className="text-sm text-white font-medium">Dica</p>
                                                    <p className="text-xs text-muted-foreground">Usaremos isso para celebrar seus marcos!</p>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}

                                {step === 3 && (
                                    <motion.div
                                        key="step3"
                                        custom={step}
                                        variants={variants}
                                        initial="enter"
                                        animate="center"
                                        exit="exit"
                                        transition={{ duration: 0.3 }}
                                        className="flex-1 flex flex-col"
                                    >
                                        <div className="mb-6">
                                            <h2 className="text-2xl font-semibold text-white mb-2">Convide seu amor</h2>
                                            <p className="text-muted-foreground">Planejar juntos é muito melhor.</p>
                                        </div>

                                        <div className="space-y-6 flex-1">
                                            <div>
                                                <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2 block">
                                                    E-mail do parceiro(a)
                                                </label>
                                                <div className="relative">
                                                    <input
                                                        type="email"
                                                        value={formData.partnerEmail}
                                                        onChange={(e) => updateForm("partnerEmail", e.target.value)}
                                                        placeholder="amor@exemplo.com"
                                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all pl-12"
                                                    />
                                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                                </div>
                                            </div>

                                            <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
                                                <p className="text-xs text-blue-200">
                                                    Um convite será enviado para este e-mail para se juntar ao <strong>{formData.homeName || "seu lar"}</strong>.
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Footer Actions */}
                            <div className="mt-8 pt-6 border-t border-white/5 flex justify-end">
                                <button
                                    onClick={handleNext}
                                    disabled={isLoading}
                                    className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-primary hover:bg-primary/90 text-white font-medium transition-all hover:scale-105 active:scale-95 disabled:opacity-50 disabled:pointer-events-none shadow-[0_0_20px_rgba(123,44,191,0.3)]"
                                >
                                    {isLoading ? (
                                        "Salvando..."
                                    ) : step === totalSteps ? (
                                        <>
                                            Finalizar
                                            <Check className="w-5 h-5" />
                                        </>
                                    ) : (
                                        <>
                                            Próximo
                                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </>
                                    )}
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
