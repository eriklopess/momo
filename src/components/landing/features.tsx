"use client"

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"
import {
    LayoutDashboard,
    Target,
    PiggyBank,
    Sparkles,
    HeartHandshake
} from "lucide-react"

export function Features() {
    return (
        <section id="features" className="py-24 bg-background relative z-10">
            <div className="container px-4 md:px-6 mx-auto mb-16 text-center">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                    Tudo o que vocês precisam. <span className="text-primary">Em um só lugar.</span>
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    Abandone os apps isolados. O Momo conecta cada aspecto da vida a dois.
                </p>
            </div>

            <BentoGrid className="max-w-4xl mx-auto">
                {items.map((item, i) => (
                    <BentoGridItem
                        key={i}
                        title={item.title}
                        description={item.description}
                        header={item.header}
                        icon={item.icon}
                        className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                    />
                ))}
            </BentoGrid>
        </section>
    )
}

const Skeleton = ({ className }: { className?: string }) => (
    <div className={`flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800 ${className}`}></div>
);

const items = [
    {
        title: "Dashboard Compartilhado",
        description: "Visão geral da relação. Widgets personalizáveis para o que importa.",
        header: <Skeleton className="bg-gradient-to-br from-violet-500/20 to-purple-500/20" />,
        icon: <LayoutDashboard className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Árvore de Metas",
        description: "Transformem sonhos em planos visuais. Conectem grandes objetivos a pequenas ações.",
        header: <Skeleton className="bg-gradient-to-br from-pink-500/20 to-rose-500/20" />,
        icon: <Target className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Finanças Inteligentes",
        description: "Controle de gastos, orçamentos e poupança conjunta sem dor de cabeça.",
        header: <Skeleton className="bg-gradient-to-br from-orange-500/20 to-yellow-500/20" />,
        icon: <PiggyBank className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Insights com IA (Gemini)",
        description: "Conselhos personalizados baseados nos dados do casal para melhorar a sintonia.",
        header: <Skeleton className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20" />,
        icon: <Sparkles className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Comunicação Profunda",
        description: "Chat dedicado com análise de humor e intenções.",
        header: <Skeleton className="bg-gradient-to-br from-green-500/20 to-emerald-500/20" />,
        icon: <HeartHandshake className="h-4 w-4 text-neutral-500" />,
    },
];
