"use client"

import { Check, Sparkles, X, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const tiers = [
    {
        name: "Free",
        price: "R$0",
        description: "Para testar e criar o hábito.",
        features: [
            { text: "1 Casal (2 pessoas)", included: true, highlight: true },
            { text: "Até 30 despesas/mês", included: true, highlight: false },
            { text: "Até 20 tarefas/mês", included: true, highlight: false },
            { text: "1 Meta Financeira Ativa", included: true, highlight: false },
            { text: "Orçamento (3 categorias)", included: true, highlight: false },
            { text: "Histórico de 30 dias", included: true, highlight: false },
            { text: "Upload de Comprovantes", included: false, highlight: false },
            { text: "Exportação de Dados", included: false },
        ],
        cta: "Começar Grátis",
        variant: "outline" as const,
        popular: false,
        comingSoon: false,
    },
    {
        name: "Premium",
        price: "R$29,90",
        description: "Resolve 100% da vida real.",
        features: [
            { text: "Tudo Ilimitado (Despesas, Tarefas, Metas)", included: true },
            { text: "Orçamentos Ilimitados", included: true },
            { text: "Histórico Completo", included: true },
            { text: "Upload de Comprovantes (2GB)", included: true },
            { text: "Pix Copia e Cola / Acerto Mensal", included: true, highlight: true },
            { text: "Exportação CSV", included: true },
        ],
        cta: "Assinar Premium",
        variant: "default" as const,
        popular: true,
        comingSoon: false,
    },
    {
        name: "Pro",
        price: "Em breve",
        description: "Para quem quer controle absoluto.",
        features: [
            { text: "Tudo do Premium", included: true, highlight: true },
            { text: "Regras Avançadas de Recorrência", included: true, highlight: false },
            { text: "Relatórios Avançados (PDF)", included: true, highlight: false },
            { text: "Múltiplos Cofrinhos Mensais", included: true, highlight: false },
            { text: "Suporte Prioritário", included: true, highlight: false },
        ] as const,
        cta: "Entrar na Lista de Espera",
        variant: "ghost" as const,
        popular: false,
        comingSoon: true,
    },
]

export function Pricing() {
    return (
        <section id="pricing" className="py-32 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-20">
                <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
            </div>

            <div className="container px-4 md:px-6 mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Planos para Cada Fase</h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Comece grátis e evolua conforme a necessidade do casal.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto items-center">
                    {tiers.map((tier, index) => (
                        <motion.div
                            key={tier.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className={`flex flex-col p-8 rounded-3xl relative transition-all duration-300 h-full
                    ${tier.popular ? 'glass border-primary/50 shadow-[0_0_30px_rgba(123,44,191,0.15)] hover:shadow-[0_0_50px_rgba(123,44,191,0.25)] scale-105 z-10' : 'bg-card/30 border-border/50 hover:bg-card/50'}
                    ${tier.comingSoon ? 'opacity-75 grayscale-[0.5]' : ''}
                `}
                        >
                            {tier.popular && (
                                <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-gradient-to-r from-primary to-purple-500 text-white text-sm font-bold rounded-full shadow-lg flex items-center gap-2">
                                    <Sparkles className="w-4 h-4" /> Recomendado
                                </div>
                            )}

                            <div className="mb-6">
                                <div className="flex justify-between items-center mb-2">
                                    <h3 className="text-2xl font-bold">{tier.name}</h3>
                                    {tier.comingSoon && <span className="bg-muted px-2 py-1 rounded text-xs font-medium flex items-center gap-1"><Clock className="w-3 h-3" /> Em Breve</span>}
                                </div>
                                <p className="text-muted-foreground text-sm min-h-[40px]">{tier.description}</p>
                            </div>

                            <div className="mb-8">
                                <span className="text-4xl font-extrabold tracking-tight">{tier.price}</span>
                                {!tier.price.includes("breve") && <span className="text-muted-foreground ml-1">/mês</span>}
                            </div>

                            <ul className="space-y-4 mb-10 flex-1">
                                {tier.features.map((feature, i) => (
                                    <li key={i} className={`flex items-start text-sm ${!feature.included ? 'text-muted-foreground/50' : ''}`}>
                                        <div className={`h-5 w-5 rounded-full flex items-center justify-center mr-3 shrink-0 ${feature.included ? 'bg-primary/20' : 'bg-muted/50'}`}>
                                            {feature.included ? <Check className="h-3 w-3 text-primary" /> : <X className="h-3 w-3" />}
                                        </div>
                                        <span className={`${feature.highlight ? 'font-bold text-primary' : ''}`}>{feature.text}</span>
                                    </li>
                                ))}
                            </ul>

                            <Button
                                className={`w-full h-12 text-base rounded-xl ${tier.popular ? 'bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25' : ''}`}
                                variant={tier.variant}
                                disabled={tier.comingSoon}
                            >
                                {tier.cta}
                            </Button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
