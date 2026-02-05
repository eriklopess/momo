"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

export default function SignOutButton() {
    const router = useRouter();
    return (
        <Button
            variant="ghost"
            size="sm"
            onClick={async () => {
                await authClient.signOut({
                    fetchOptions: {
                        onSuccess: () => {
                            router.push("/auth/sign-in");
                        }
                    }
                });
            }}
            className="w-full justify-start text-muted-foreground hover:text-white hover:bg-white/10"
        >
            <LogOut className="mr-2 h-4 w-4" />
            Sair
        </Button>
    );
}
