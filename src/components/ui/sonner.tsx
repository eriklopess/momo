"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner } from "sonner"

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
    const { theme = "system" } = useTheme()

    return (
        <Sonner
            theme={theme as ToasterProps["theme"]}
            className="toaster group"
            toastOptions={{
                classNames: {
                    toast:
                        "group toast group-[.toaster]:bg-black/80 group-[.toaster]:backdrop-blur-xl group-[.toaster]:text-foreground group-[.toaster]:border-white/10 group-[.toaster]:shadow-lg group-[.toaster]:rounded-xl font-medium",
                    description: "group-[.toast]:text-muted-foreground",
                    actionButton:
                        "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
                    cancelButton:
                        "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
                    success: "!text-green-400 !border-green-500/20 !bg-green-500/10",
                    error: "!text-red-400 !border-red-500/20 !bg-red-500/10",
                    warning: "!text-amber-400 !border-amber-500/20 !bg-amber-500/10",
                    info: "!text-blue-400 !border-blue-500/20 !bg-blue-500/10",
                },
            }}
            {...props}
        />
    )
}

export { Toaster }
