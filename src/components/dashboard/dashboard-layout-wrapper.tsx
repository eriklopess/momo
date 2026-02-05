"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import { DashboardSidebar } from "@/components/dashboard/sidebar";
import { MobileNav } from "@/components/dashboard/mobile-nav";
import { cn } from "@/lib/utils";

export function DashboardLayoutWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const isSetupPage = pathname === "/dashboard/setup";
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div className="min-h-screen bg-black">
            {/* Background Effects */}
            <div className="fixed inset-0 z-0">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-purple-900/10 blur-[120px] rounded-full pointer-events-none" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
            </div>

            {!isSetupPage && (
                <>
                    <DashboardSidebar isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
                    <MobileNav />
                </>
            )}

            {/* Main Content */}
            <main
                className={cn(
                    "relative z-10 pt-16 lg:pt-0 transition-all duration-300",
                    !isSetupPage ? (isCollapsed ? "lg:pl-20" : "lg:pl-64") : "pl-0"
                )}
            >
                <div className="container mx-auto p-8">
                    {children}
                </div>
            </main>
        </div>
    );
}
