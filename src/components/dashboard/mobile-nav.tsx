"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { navItems } from "./nav-items";
import { authClient } from "@/lib/auth-client";
import SignOutButton from "../sign-out-button";

export function MobileNav() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const { data: session } = authClient.useSession();
    const user = session?.user;

    const toggleOpen = () => setIsOpen(!isOpen);

    return (
        <div className="lg:hidden">
            {/* Mobile Header Trigger */}
            <div className="fixed top-0 left-0 right-0 z-40 flex h-16 items-center justify-between border-b border-white/5 bg-black/80 backdrop-blur-lg px-6">
                <Link href="/dashboard" className="flex items-center gap-2 font-bold text-xl text-primary">
                    <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center text-white">
                        M
                    </div>
                    <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">momo</span>
                </Link>
                <button
                    onClick={toggleOpen}
                    className="p-2 -mr-2 text-muted-foreground hover:text-white transition-colors"
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Backdrop & Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm"
                        />

                        {/* Drawer */}
                        <motion.aside
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed inset-y-0 left-0 z-50 w-64 flex flex-col bg-[#0A0A0A] border-r border-white/10"
                        >
                            <div className="flex h-16 items-center border-b border-white/5 px-6">
                                <span className="font-bold text-lg text-white">Menu</span>
                            </div>

                            <div className="flex-1 overflow-y-auto py-6 px-4 space-y-8">
                                {navItems.map((group, groupIndex) => (
                                    <div key={groupIndex}>
                                        <h3 className="mb-2 px-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground/50">
                                            {group.group}
                                        </h3>
                                        <div className="space-y-1">
                                            {group.items.map((item) => {
                                                const isActive = pathname === item.href;
                                                return (
                                                    <Link
                                                        key={item.href}
                                                        href={item.href}
                                                        onClick={() => setIsOpen(false)}
                                                        className={cn(
                                                            "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200",
                                                            isActive
                                                                ? "bg-primary/10 text-primary border border-primary/20"
                                                                : "text-muted-foreground hover:bg-white/5 hover:text-white"
                                                        )}
                                                    >
                                                        <item.icon className={cn(
                                                            "h-4 w-4 transition-colors",
                                                            isActive ? "text-primary" : "text-muted-foreground"
                                                        )} />
                                                        <span>{item.title}</span>
                                                    </Link>
                                                );
                                            })}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="border-t border-white/5 p-4 bg-black/20">
                                <div className="flex items-center gap-3 rounded-lg bg-white/5 p-3 mb-3 border border-white/5">
                                    <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-primary to-purple-400 flex items-center justify-center text-white font-bold text-xs">
                                        {user?.name?.charAt(0).toUpperCase() || "U"}
                                    </div>
                                    <div className="flex-1 overflow-hidden">
                                        <p className="truncate text-sm font-medium text-white">
                                            {user?.name || "Usuário"}
                                        </p>
                                        <p className="truncate text-[10px] text-muted-foreground">
                                            {user?.email || "carregando..."}
                                        </p>
                                    </div>
                                </div>
                                <SignOutButton />
                            </div>
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}
