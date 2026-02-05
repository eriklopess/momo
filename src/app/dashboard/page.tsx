"use client";

import { motion } from "framer-motion";
import { authClient } from "@/lib/auth-client";
import {
    Plus,
    Wallet,
    ArrowUpRight,
    ArrowDownRight,
    MoreHorizontal,
    ShoppingBasket,
    CheckSquare,
    DollarSign,
    ShoppingCart,
    Calendar,
    Target,
    AlertCircle
} from "lucide-react";
import { OverviewChart } from "@/components/dashboard/overview-chart";

export default function DashboardPage() {
    const { data: session } = authClient.useSession();
    const user = session?.user;

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    const quickActions = [
        { title: "Nova Despesa", icon: ArrowDownRight, color: "bg-red-500", href: "#" },
        { title: "Nova Receita", icon: ArrowUpRight, color: "bg-green-500", href: "#" },
        { title: "Item na Lista", icon: ShoppingBasket, color: "bg-orange-500", href: "/dashboard/shopping" },
        { title: "Nova Tarefa", icon: CheckSquare, color: "bg-blue-500", href: "/dashboard/chores" },
    ];

    const recentActivity = [
        { id: 1, type: "finance", title: "Compra no Supermercado", subtitle: "Alimentação", amount: "-R$ 432,50", time: "2h atrás", icon: ShoppingCart, color: "text-red-400 bg-red-500/10" },
        { id: 2, type: "chore", title: "Limpar Banheiro", subtitle: "Concluído por Julia", amount: "", time: "4h atrás", icon: CheckSquare, color: "text-blue-400 bg-blue-500/10" },
        { id: 3, type: "finance", title: "Freelance", subtitle: "Renda Extra", amount: "+R$ 850,00", time: "Ontem", icon: DollarSign, color: "text-green-400 bg-green-500/10" },
        { id: 4, type: "shopping", title: "Adicionado 5 itens", subtitle: "Lista de Compras", amount: "", time: "Ontem", icon: ShoppingBasket, color: "text-orange-400 bg-orange-500/10" },
    ];

    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-8"
        >
            {/* Header */}
            <motion.div variants={item} className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-white tracking-tight">
                        Olá, {user?.name?.split(" ")[0] || "Viajante"} 👋
                    </h1>
                    <p className="text-muted-foreground mt-1">
                        Aqui está o resumo da sua casa e finanças hoje.
                    </p>
                </div>
                <div className="flex items-center gap-2">
                    <div className="text-right hidden md:block mr-2">
                        <p className="text-xs text-muted-foreground">Saldo Atual</p>
                        <p className="font-bold text-white">R$ 12.450,00</p>
                    </div>
                    <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-primary to-purple-400 p-[2px]">
                        <div className="h-full w-full rounded-full bg-black flex items-center justify-center">
                            <Wallet className="w-5 h-5 text-white" />
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Quick Actions Row */}
            <motion.div variants={item} className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {quickActions.map((action, idx) => (
                    <button
                        key={idx}
                        className="flex items-center gap-3 p-4 rounded-xl glass hover:bg-white/10 transition-all border border-white/5 hover:border-white/20 group text-left"
                    >
                        <div className={`h-10 w-10 rounded-full ${action.color} flex items-center justify-center text-white shadow-lg`}>
                            <action.icon className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-white group-hover:text-primary transition-colors">{action.title}</p>
                            <p className="text-[10px] text-muted-foreground">Adicionar novo</p>
                        </div>
                    </button>
                ))}
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Feed */}
                <motion.div variants={item} className="lg:col-span-2 space-y-8">
                    {/* Household Overview */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="glass p-4 rounded-xl border border-white/5 flex flex-col justify-between hover:bg-white/5 transition-colors cursor-pointer group">
                            <div className="flex justify-between items-start">
                                <div className="h-8 w-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-500">
                                    <CheckSquare className="w-4 h-4" />
                                </div>
                                <span className="bg-red-500/20 text-red-400 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                                    <AlertCircle className="w-3 h-3" />
                                    2 Urgentes
                                </span>
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-white mt-3">5</p>
                                <p className="text-xs text-muted-foreground">Tarefas Pendentes</p>
                            </div>
                        </div>

                        <div className="glass p-4 rounded-xl border border-white/5 flex flex-col justify-between hover:bg-white/5 transition-colors cursor-pointer group">
                            <div className="flex justify-between items-start">
                                <div className="h-8 w-8 rounded-lg bg-orange-500/20 flex items-center justify-center text-orange-500">
                                    <ShoppingBasket className="w-4 h-4" />
                                </div>
                                <span className="text-xs font-medium text-muted-foreground">Est. R$ 150</span>
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-white mt-3">12</p>
                                <p className="text-xs text-muted-foreground">Itens no Mercado</p>
                            </div>
                        </div>

                        <div className="glass p-4 rounded-xl border border-white/5 flex flex-col justify-between hover:bg-white/5 transition-colors cursor-pointer group">
                            <div className="flex justify-between items-start">
                                <div className="h-8 w-8 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-500">
                                    <Target className="w-4 h-4" />
                                </div>
                                <span className="text-xs font-medium text-green-400">15%</span>
                            </div>
                            <div>
                                <p className="font-semibold text-white mt-3 truncate">Viagem Ano Novo</p>
                                <div className="w-full h-1 bg-white/10 rounded-full mt-2 overflow-hidden">
                                    <div className="h-full bg-purple-500 w-[15%]" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Charts Section */}
                    <OverviewChart />

                    <div className="space-y-6">
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-semibold text-white">Atividade Recente</h3>
                            <button className="text-sm text-primary hover:underline">Ver tudo</button>
                        </div>

                        <div className="space-y-4">
                            {recentActivity.map((activity) => (
                                <div key={activity.id} className="glass p-4 rounded-2xl border border-white/5 flex items-center justify-between hover:bg-white/5 transition-colors cursor-pointer group">
                                    <div className="flex items-center gap-4">
                                        <div className={`h-12 w-12 rounded-xl flex items-center justify-center ${activity.color}`}>
                                            <activity.icon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="font-medium text-white">{activity.title}</p>
                                            <p className="text-xs text-muted-foreground">{activity.subtitle}</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        {activity.amount && (
                                            <p className={`font-bold ${activity.amount.startsWith('+') ? 'text-green-400' : 'text-white'}`}>
                                                {activity.amount}
                                            </p>
                                        )}
                                        <p className="text-xs text-muted-foreground">{activity.time}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Sidebar Stats / Focus */}
                <motion.div variants={item} className="space-y-6">
                    <div className="glass p-5 rounded-2xl border border-white/5 relative overflow-hidden">
                        <div className="flex justify-between items-center mb-4 relative z-10">
                            <h3 className="font-semibold text-white">Orçamento Mensal</h3>
                            <p className="text-xs text-muted-foreground">Fev 2026</p>
                        </div>

                        <div className="relative z-10">
                            <div className="flex justify-between items-end mb-2">
                                <p className="text-2xl font-bold text-white">R$ 2.100</p>
                                <p className="text-xs text-muted-foreground mb-1">de R$ 5.000</p>
                            </div>
                            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                                <div className="h-full bg-gradient-to-r from-green-400 to-green-600 w-[42%]" />
                            </div>
                            <p className="text-[10px] text-muted-foreground mt-2 text-right">42% utilizado</p>
                        </div>

                        {/* Decorative Background */}
                        <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-green-500/10 rounded-full blur-2xl" />
                    </div>

                    <h3 className="text-lg font-semibold text-white">Foco de Hoje</h3>

                    <div className="glass p-5 rounded-2xl border border-white/5 space-y-4">
                        <div className="flex items-center gap-3 pb-3 border-b border-white/5">
                            <Calendar className="w-5 h-5 text-primary" />
                            <span className="font-medium text-white">5 Fev, Quarta-feira</span>
                        </div>

                        <div className="space-y-3">
                            {/* Mock Tasks Due Today */}
                            <div className="flex items-center gap-3 p-3 rounded-lg bg-red-500/10 border border-red-500/20">
                                <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                                <div className="flex-1">
                                    <p className="text-sm font-medium text-white">Conta de Luz</p>
                                    <p className="text-xs text-red-400">Vence Hoje • R$ 120,90</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 p-3 rounded-lg bg-orange-500/10 border border-orange-500/20">
                                <div className="h-2 w-2 rounded-full bg-orange-500" />
                                <div className="flex-1">
                                    <p className="text-sm font-medium text-white">Comprar Leite</p>
                                    <p className="text-xs text-orange-400">Pendente na Lista</p>
                                </div>
                            </div>
                        </div>

                        <button className="w-full py-2 text-xs font-medium text-muted-foreground hover:text-white bg-white/5 hover:bg-white/10 rounded-lg transition-colors">
                            Ver Agenda Completa
                        </button>
                    </div>

                    {/* Mini Stats Grid */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="glass p-4 rounded-xl border border-white/5">
                            <p className="text-xs text-muted-foreground">Receitas (Mês)</p>
                            <p className="text-lg font-bold text-green-400 mt-1">R$ 5.2k</p>
                        </div>
                        <div className="glass p-4 rounded-xl border border-white/5">
                            <p className="text-xs text-muted-foreground">Despesas (Mês)</p>
                            <p className="text-lg font-bold text-red-400 mt-1">R$ 2.1k</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}
