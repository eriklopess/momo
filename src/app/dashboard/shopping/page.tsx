"use client";

import { motion } from "framer-motion";
import { Plus, ShoppingBasket, Check, Trash2 } from "lucide-react";

export default function ShoppingPage() {
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

    const mockItems = [
        { id: 1, name: "Leite Integral", quantity: "2 un", checked: false },
        { id: 2, name: "Pão de Forma", quantity: "1 un", checked: true },
        { id: 3, name: "Café em Pó", quantity: "500g", checked: false },
        { id: 4, name: "Detergente", quantity: "3 un", checked: false },
    ];

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
                        <div className="h-10 w-10 rounded-xl bg-orange-500/20 flex items-center justify-center text-orange-500">
                            <ShoppingBasket className="w-6 h-6" />
                        </div>
                        Lista de Compras
                    </h1>
                    <p className="text-muted-foreground mt-1 ml-14">
                        Gerencie os itens que faltam na sua despensa.
                    </p>
                </div>
                <button className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors shadow-[0_0_20px_rgba(123,44,191,0.3)]">
                    <Plus className="w-4 h-4" />
                    Adicionar Item
                </button>
            </motion.div>

            <motion.div variants={item} className="glass rounded-2xl border border-white/5 overflow-hidden">
                <div className="p-6 border-b border-white/5 bg-white/5">
                    <h3 className="font-medium text-white">Itens Pendentes</h3>
                </div>
                <div className="divide-y divide-white/5">
                    {mockItems.map((item) => (
                        <div key={item.id} className="p-4 flex items-center justify-between group hover:bg-white/5 transition-colors">
                            <div className="flex items-center gap-4">
                                <div className={`h-6 w-6 rounded-md border flex items-center justify-center cursor-pointer transition-colors ${item.checked ? 'bg-green-500 border-green-500 text-white' : 'border-white/20 text-transparent hover:border-white/40'}`}>
                                    <Check className="w-4 h-4" />
                                </div>
                                <div>
                                    <p className={`font-medium ${item.checked ? 'text-muted-foreground line-through' : 'text-white'}`}>
                                        {item.name}
                                    </p>
                                    <p className="text-xs text-muted-foreground">{item.quantity}</p>
                                </div>
                            </div>
                            <button className="text-muted-foreground hover:text-red-400 opacity-0 group-hover:opacity-100 transition-all p-2 hover:bg-red-500/10 rounded-lg">
                                <Trash2 className="w-4 h-4" />
                            </button>
                        </div>
                    ))}
                </div>
            </motion.div>
        </motion.div>
    );
}
