"use client";

import { motion } from "framer-motion";
import { Plus, CheckSquare, Calendar, User } from "lucide-react";

export default function ChoresPage() {
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

    const mockChores = [
        { id: 1, title: "Lavar a Louça", assignee: "Erik", due: "Hoje", priority: "high" },
        { id: 2, title: "Limpar Banheiro", assignee: "Julia", due: "Amanhã", priority: "medium" },
        { id: 3, title: "Tirar o Lixo", assignee: "Erik", due: "Hoje", priority: "low" },
    ];

    const getPriorityColor = (priority: string) => {
        switch (priority) {
            case 'high': return 'bg-red-500/20 text-red-400';
            case 'medium': return 'bg-yellow-500/20 text-yellow-400';
            default: return 'bg-blue-500/20 text-blue-400';
        }
    };

    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-8"
        >
            <motion.div variants={item} className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-white tracking-tight flex items-center gap-3">
                        <div className="h-10 w-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-500">
                            <CheckSquare className="w-6 h-6" />
                        </div>
                        Tarefas da Casa
                    </h1>
                    <p className="text-muted-foreground mt-1 ml-14">
                        Mantenha a casa organizada distribuindo responsabilidades.
                    </p>
                </div>
                <button className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors shadow-[0_0_20px_rgba(123,44,191,0.3)]">
                    <Plus className="w-4 h-4" />
                    Nova Tarefa
                </button>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockChores.map((chore, index) => (
                    <motion.div
                        key={chore.id}
                        variants={item}
                        className="glass p-5 rounded-2xl border border-white/5 hover:border-primary/30 transition-colors group cursor-pointer"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full ${getPriorityColor(chore.priority)}`}>
                                {chore.priority === 'high' ? 'Urgente' : chore.priority === 'medium' ? 'Importante' : 'Rotina'}
                            </span>
                            <div className="h-8 w-8 rounded-lg bg-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/10">
                                <CheckSquare className="w-4 h-4 text-white" />
                            </div>
                        </div>

                        <h3 className="text-lg font-semibold text-white mb-2">{chore.title}</h3>

                        <div className="flex items-center gap-4 text-sm text-muted-foreground mt-4 pt-4 border-t border-white/5">
                            <div className="flex items-center gap-1.5">
                                <User className="w-3.5 h-3.5" />
                                <span>{chore.assignee}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <Calendar className="w-3.5 h-3.5" />
                                <span>{chore.due}</span>
                            </div>
                        </div>
                    </motion.div>
                ))}

                <motion.div
                    variants={item}
                    className="glass p-5 rounded-2xl border border-dashed border-white/10 hover:border-primary/50 hover:bg-white/5 transition-all cursor-pointer flex flex-col items-center justify-center text-center gap-3 min-h-[160px]"
                >
                    <div className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center">
                        <Plus className="w-5 h-5 text-muted-foreground" />
                    </div>
                    <p className="font-medium text-muted-foreground">Criar Nova Tarefa</p>
                </motion.div>
            </div>
        </motion.div>
    );
}
