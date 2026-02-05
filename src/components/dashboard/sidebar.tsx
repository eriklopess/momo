"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { navItems } from "./nav-items";
import { authClient } from "@/lib/auth-client";
import SignOutButton from "../sign-out-button";
import { motion } from "framer-motion";

import { ChevronLeft, ChevronRight } from "lucide-react";

interface DashboardSidebarProps {
    isCollapsed: boolean;
    toggleSidebar: () => void;
}

export function DashboardSidebar({ isCollapsed, toggleSidebar }: DashboardSidebarProps) {
    const pathname = usePathname();
    const { data: session } = authClient.useSession();
    const user = session?.user;

    return (
        <aside
            className={cn(
                "hidden h-screen flex-col border-r border-white/5 bg-black/40 backdrop-blur-xl lg:flex fixed left-0 top-0 z-50 transition-all duration-300",
                isCollapsed ? "w-20" : "w-64"
            )}
        >
            {/* Logo area */}
            <div className={cn("flex h-16 items-center border-b border-white/5 px-6", isCollapsed && "justify-center px-0")}>
                <Link href="/dashboard" className="flex items-center gap-2 font-bold text-xl text-primary">
                    <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center text-white shrink-0">
                        M
                    </div>
                    {!isCollapsed && (
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent"
                        >
                            momo
                        </motion.span>
                    )}
                </Link>
            </div>

            {/* Navigation */}
            <div className="flex-1 overflow-y-auto py-6 px-4 space-y-8">
                {navItems.map((group, groupIndex) => (
                    <div key={groupIndex}>
                        {!isCollapsed && (
                            <h3 className="mb-2 px-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground/50 truncate">
                                {group.group}
                            </h3>
                        )}
                        <div className="space-y-1">
                            {group.items.map((item) => {
                                const isActive = pathname === item.href;
                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={cn(
                                            "group relative flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200",
                                            isActive
                                                ? "text-white"
                                                : "text-muted-foreground hover:text-white",
                                            isCollapsed && "justify-center px-0"
                                        )}
                                        title={isCollapsed ? item.title : undefined}
                                    >
                                        {/* Active Background & Glow */}
                                        {isActive && (
                                            <motion.div
                                                layoutId="sidebar-active"
                                                className={cn(
                                                    "absolute inset-0 rounded-lg bg-primary/10 border border-primary/20 shadow-[0_0_15px_rgba(123,44,191,0.15)]",
                                                    isCollapsed && "mx-2"
                                                )}
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                            />
                                        )}

                                        <item.icon className={cn(
                                            "relative z-10 h-5 w-5 transition-colors shrink-0",
                                            isActive ? "text-primary" : "text-muted-foreground group-hover:text-white"
                                        )} />

                                        {!isCollapsed && (
                                            <motion.span
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                className="relative z-10 truncate"
                                            >
                                                {item.title}
                                            </motion.span>
                                        )}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>

            {/* Footer / User Profile Area */}
            <div className="border-t border-white/5 p-4 bg-black/20 flex flex-col gap-4">
                <div className={cn("flex items-center gap-3 rounded-lg bg-white/5 p-3 border border-white/5", isCollapsed && "justify-center p-2 bg-transparent border-0")}>
                    <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-primary to-purple-400 flex items-center justify-center text-white font-bold text-xs ring-2 ring-black shrink-0">
                        {user?.name?.charAt(0).toUpperCase() || "U"}
                    </div>
                    {!isCollapsed && (
                        <div className="flex-1 overflow-hidden">
                            <p className="truncate text-sm font-medium text-white">
                                {user?.name || "Usuário"}
                            </p>
                            <p className="truncate text-[10px] text-muted-foreground">
                                {user?.email || "carregando..."}
                            </p>
                        </div>
                    )}
                </div>

                {!isCollapsed && <SignOutButton />}

                {/* Toggle Button */}
                <button
                    onClick={toggleSidebar}
                    className={cn(
                        "flex items-center justify-center p-2 rounded-lg text-muted-foreground hover:text-white hover:bg-white/5 transition-colors w-full",
                        isCollapsed && "mx-auto"
                    )}
                >
                    {isCollapsed ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
                </button>
            </div>
        </aside>
    );
}
