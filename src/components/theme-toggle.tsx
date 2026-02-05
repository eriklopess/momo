"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ModeToggle() {
    const { setTheme } = useTheme()

    return (
        <div className="flex gap-2">
            <button
                onClick={() => setTheme("light")}
                className="p-2 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
                title="Light Mode"
            >
                <Sun className="h-5 w-5" />
            </button>
            <button
                onClick={() => setTheme("dark")}
                className="p-2 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
                title="Dark Mode"
            >
                <Moon className="h-5 w-5" />
            </button>
        </div>
    )
}
