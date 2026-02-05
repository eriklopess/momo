"use client"

import Link from "next/link"
import { ModeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/60 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 max-w-screen-2xl items-center mx-auto px-4 justify-between">
                <div className="flex items-center gap-2 group cursor-pointer">
                    <div className="h-9 w-9 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20 transition-transform group-hover:scale-110">
                        <span className="text-primary-foreground font-bold text-lg">M</span>
                    </div>
                    <Link href="/" className="mr-6 flex items-center space-x-2">
                        <span className="font-bold hidden sm:inline-block text-lg tracking-tight">Momo</span>
                    </Link>
                    <nav className="flex items-center gap-6 text-sm font-medium">
                        <Link href="#features" className="transition-colors hover:text-primary text-muted-foreground">
                            Funcionalidades
                        </Link>
                        <Link href="#pricing" className="transition-colors hover:text-primary text-muted-foreground">
                            Preços
                        </Link>
                        <Link href="#about" className="transition-colors hover:text-primary text-muted-foreground">
                            Sobre
                        </Link>
                    </nav>
                </div>
                <div className="flex items-center gap-4">
                    <ModeToggle />
                    <Button size="sm" className="hidden md:inline-flex rounded-full px-6 shadow-md hover:shadow-primary/20">Entrar</Button>
                </div>
            </div>
        </header>
    )
}
