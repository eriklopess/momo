"use client"

import { UserPlus, Target, TrendingUp, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

const steps = [
    {
        icon: UserPlus,
        title: "1. Convide seu Amor",
        description: "Crie seu espaço compartilhado e sincronizem suas vidas em segundos."
    },
    {
        icon: Target,
        title: "2. Definam Metas",
        description: "Adicionem sonhos compartilhados e quebrem em passos alcançáveis."
    },
    {
        icon: TrendingUp,
        title: "3. Acompanhem o Progresso",
        description: "Vejam a relação crescer com rastreadores visuais e contagem de ofensiva."
    },
    {
        icon: Sparkles,
        title: "4. Recebam Insights",
        description: "Recebam dicas personalizadas do Gemini para manter a sintonia."
    }
]

export function HowItWorks() {
    return (
        <section className="py-32 bg-background relative overflow-hidden">
            <div className="container px-4 md:px-6 mx-auto relative z-10">
                <div className="text-center mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold tracking-tighter"
                    >
                        Como o <span className="text-primary">Momo</span> Funciona
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto"
                    >
                        Comecem em minutos, vejam resultados por anos.
                    </motion.p>
                </div>

                <div className="relative grid grid-cols-1 md:grid-cols-4 gap-12">

                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-16 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent -z-10" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex flex-col items-center text-center group"
                        >
                            <div className="relative mb-8">
                                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="h-32 w-32 rounded-full glass border border-white/10 flex items-center justify-center relative z-10 bg-background/50 backdrop-blur-md shadow-xl transition-transform duration-300 group-hover:scale-105">
                                    <step.icon className="h-10 w-10 text-primary" />
                                </div>
                                <div className="absolute -top-2 -right-2 h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm shadow-lg">
                                    {index + 1}
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold mb-3">{step.title.split(". ")[1]}</h3>
                            <p className="text-muted-foreground leading-relaxed max-w-[250px]">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
