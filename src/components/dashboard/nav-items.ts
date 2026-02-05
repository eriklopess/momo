import {
    LayoutDashboard,
    Wallet,
    PiggyBank,
    Settings,
    CreditCard,
    ArrowRightLeft,
    Target,
    ShoppingBasket,
    CheckSquare
} from "lucide-react";

export const navItems = [
    {
        group: "Principal",
        items: [
            {
                title: "Visão Geral",
                href: "/dashboard",
                icon: LayoutDashboard,
            },
            {
                title: "Transações",
                href: "/dashboard/transactions",
                icon: ArrowRightLeft,
            },
        ]
    },
    {
        group: "Casa & Organização",
        items: [
            {
                title: "Lista de Compras",
                href: "/dashboard/shopping",
                icon: ShoppingBasket,
            },
            {
                title: "Tarefas da Casa",
                href: "/dashboard/chores",
                icon: CheckSquare,
            },
        ]
    },
    {
        group: "Planejamento",
        items: [
            {
                title: "Orçamentos",
                href: "/dashboard/budgets",
                icon: Wallet,
            },
            {
                title: "Objetivos",
                href: "/dashboard/goals",
                icon: Target,
            },
        ]
    },
    {
        group: "Sistema",
        items: [
            {
                title: "Minha Conta",
                href: "/account/settings",
                icon: Settings,
            },
        ]
    }
];
