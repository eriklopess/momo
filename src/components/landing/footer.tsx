export function Footer() {
    return (
        <footer className="py-16 border-t bg-background relative z-10">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                    <div className="col-span-2 md:col-span-1">
                        <div className="flex items-center gap-2 mb-6 cursor-pointer">
                            <div className="h-8 w-8 rounded-xl bg-primary flex items-center justify-center">
                                <span className="text-primary-foreground font-bold text-sm">M</span>
                            </div>
                            <span className="font-bold text-xl">Momo</span>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                            Construindo relacionamentos mais fortes através de organização e gamificação inteligente. Junte-se a milhares de casais.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-6">Produto</h4>
                        <ul className="space-y-4 text-sm text-muted-foreground">
                            <li><a href="#" className="hover:text-primary transition-colors">Funcionalidades</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Preços</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Download</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-6">Legal</h4>
                        <ul className="space-y-4 text-sm text-muted-foreground">
                            <li><a href="#" className="hover:text-primary transition-colors">Privacidade</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Termos</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-6">Social</h4>
                        <ul className="space-y-4 text-sm text-muted-foreground">
                            <li><a href="#" className="hover:text-primary transition-colors">Twitter (X)</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Instagram</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">LinkedIn</a></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-border/50 pt-8 text-center text-sm text-muted-foreground flex flex-col md:flex-row justify-between items-center gap-4">
                    <span>© {new Date().getFullYear()} Momo Inc. Todos os direitos reservados.</span>
                    <div className="flex gap-4">
                        <span className="text-xs opacity-50">Feito com 💜 para casais</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
