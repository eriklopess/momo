"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Sparkles, ArrowRight } from "lucide-react"

export function Hero() {
    return (
        <section className="relative overflow-hidden min-h-[90vh] flex items-center justify-center">

            {/* Background Aurora Effect */}
            <div className="absolute inset-0 -z-20 overflow-hidden">
                <div className="absolute top-[-50%] left-[-10%] w-[120%] h-[120%] bg-[radial-gradient(ellipse_at_center,rgba(123,44,191,0.15),transparent_70%)] animate-aurora opacity-70 blur-3xl pointer-events-none" />
            </div>

            <div className="container px-4 md:px-6 mx-auto relative z-10 flex flex-col items-center text-center">

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-semibold text-primary mb-8 backdrop-blur-sm shadow-[0_0_15px_rgba(123,44,191,0.3)]"
                >
                    <Sparkles className="w-4 h-4" />
                    <span>O Dashboard Definitivo para Casais</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight max-w-5xl"
                >
                    Sincronize Suas Vidas. <br />
                    <span className="text-gradient drop-shadow-sm">Conquistem Juntos.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground/90 leading-relaxed"
                >
                    Chega de planilhas chatas e brigas por tarefas. O Momo unifica finanças, metas e dia a dia em uma experiência gamificada e inteligente.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                    className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                >
                    <Button size="lg" className="rounded-full h-14 px-8 text-lg font-semibold shadow-[0_0_20px_rgba(123,44,191,0.4)] hover:shadow-[0_0_30px_rgba(123,44,191,0.6)] transition-all duration-300 bg-primary hover:bg-primary/90">
                        Começar Gratuitamente
                    </Button>
                    <Button size="lg" variant="outline" className="rounded-full h-14 px-8 text-lg glass hover:bg-white/5 border-primary/20">
                        Como Funciona <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                </motion.div>

                {/* Floating Elements (Decorative) */}
                <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-10 left-10 md:left-20 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-transparent backdrop-blur-md border border-white/10 hidden md:block"
                />
                <motion.div
                    animate={{ y: [0, 20, 0] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-20 right-10 md:right-20 w-20 h-20 rounded-full bg-gradient-to-tl from-purple-500/20 to-transparent backdrop-blur-md border border-white/10 hidden md:block"
                />

            </div>
        </section>
    )
}
