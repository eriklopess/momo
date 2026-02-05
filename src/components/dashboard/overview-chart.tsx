"use client";

import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { DollarSign } from "lucide-react";

const data = [
    { month: "Jan", income: 4200, expense: 3100 },
    { month: "Fev", income: 3800, expense: 3400 },
    { month: "Mar", income: 4900, expense: 2800 },
    { month: "Abr", income: 5200, expense: 3500 },
    { month: "Mai", income: 4800, expense: 2900 },
    { month: "Jun", income: 5800, expense: 3300 },
];

export function OverviewChart() {
    return (
        <div className="glass p-6 rounded-2xl border border-white/5 space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h3 className="text-lg font-semibold text-white">Fluxo de Caixa</h3>
                    <p className="text-sm text-muted-foreground">Receitas vs Despesas (Últimos 6 meses)</p>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-white/5 border border-white/5">
                    <DollarSign className="w-4 h-4 text-primary" />
                    <span className="text-xs font-semibold text-white">Salvar Relatório</span>
                </div>
            </div>

            <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#4ade80" stopOpacity={0.3} />
                                <stop offset="95%" stopColor="#4ade80" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="colorExpense" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#f87171" stopOpacity={0.3} />
                                <stop offset="95%" stopColor="#f87171" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
                        <XAxis
                            dataKey="month"
                            stroke="#71717a"
                            fontSize={12}
                            tickLine={false}
                            axisLine={false}
                        />
                        <YAxis
                            stroke="#71717a"
                            fontSize={12}
                            tickLine={false}
                            axisLine={false}
                            tickFormatter={(value) => `R$${value / 1000}k`}
                        />
                        <Tooltip
                            content={({ active, payload, label }) => {
                                if (active && payload && payload.length) {
                                    return (
                                        <div className="glass p-3 rounded-lg border border-white/10 shadow-xl">
                                            <p className="text-white font-semibold mb-2">{label}</p>
                                            <div className="space-y-1">
                                                <p className="text-sm text-green-400">
                                                    Receitas: R$ {payload[0].value}
                                                </p>
                                                <p className="text-sm text-red-400">
                                                    Despesas: R$ {payload[1].value}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                }
                                return null;
                            }}
                        />
                        <Area
                            type="monotone"
                            dataKey="income"
                            stroke="#4ade80"
                            strokeWidth={2}
                            fillOpacity={1}
                            fill="url(#colorIncome)"
                        />
                        <Area
                            type="monotone"
                            dataKey="expense"
                            stroke="#f87171"
                            strokeWidth={2}
                            fillOpacity={1}
                            fill="url(#colorExpense)"
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
