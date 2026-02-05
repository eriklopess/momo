"use client"

import { Star, User } from "lucide-react"
import { motion } from "framer-motion"

const testimonials = [
    {
        quote: "O Momo mudou completamente como lidamos com nossas finanças. Adeus planilhas!",
        author: "Sara & Miguel",
        role: "Casados há 3 anos",
        rating: 5,
    },
    {
        quote: "A árvore de metas ajudou a gente a planejar o casamento passo a passo. Incrível.",
        author: "Davi & Tomaz",
        role: "Noivos",
        rating: 5,
    },
    {
        quote: "Amo a gamificação das tarefas. Finalmente a limpeza da casa ficou divertida.",
        author: "Júlia & Alex",
        role: "Morando Juntos",
        rating: 5,
    },
    {
        quote: "A análise de humor nos ajudou a entender melhor o momento um do outro. Essencial.",
        author: "Carla & Pedro",
        role: "Namorados",
        rating: 5,
    },
    {
        quote: "Simplesmente o melhor app para casais. Design lindo e super funcional.",
        author: "Beatriz & João",
        role: "Recém-casados",
        rating: 5,
    }
]

export function Testimonials() {
    return (
        <section className="py-24 bg-background overflow-hidden">
            <div className="container px-4 md:px-6 mx-auto mb-16 text-center">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                    Amado por Casais <span className="text-primary">Reais</span>
                </h2>
            </div>

            <div className="relative flex overflow-hidden group">
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

                <motion.div
                    className="flex gap-8 whitespace-nowrap"
                    animate={{ x: [0, -1000] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 30,
                    }}
                >
                    {[...testimonials, ...testimonials, ...testimonials].map((t, i) => (
                        <div key={i} className="inline-block w-[350px] md:w-[450px] p-6 rounded-2xl bg-muted/30 border border-border/50 backdrop-blur-sm whitespace-normal shrink-0">
                            <div className="flex gap-1 mb-4 text-primary">
                                {[...Array(t.rating)].map((_, i) => (
                                    <Star key={i} className="h-4 w-4 fill-current" />
                                ))}
                            </div>
                            <p className="text-lg italic mb-6 text-foreground/90">"{t.quote}"</p>
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                                    <User className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                    <p className="font-semibold">{t.author}</p>
                                    <p className="text-xs text-muted-foreground">{t.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
