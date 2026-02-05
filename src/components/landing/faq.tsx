"use client"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
    {
        question: "Meus dados estão seguros?",
        answer: "Absolutamente. Usamos criptografia de nível bancário para garantir que seus dados financeiros e pessoais estejam protegidos."
    },
    {
        question: "Posso usar com múltiplos parceiros?",
        answer: "Atualmente, o Momo é otimizado para duas pessoas (casais). O suporte a múltiplos usuários está em nosso roadmap."
    },
    {
        question: "Os dois precisam pagar o Premium?",
        answer: "Não! Apenas uma assinatura é necessária por casal para desbloquear os recursos Premium para ambos."
    },
    {
        question: "O app conecta com meu banco?",
        answer: "Sim, suportamos conexões seguras com os principais bancos do Brasil para rastreamento automático de transações."
    }
]

export function FAQ() {
    return (
        <section className="py-24 bg-background">
            <div className="container px-4 md:px-6 mx-auto max-w-3xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Perguntas Frequentes</h2>
                    <p className="mt-4 text-muted-foreground">Tire suas dúvidas antes de começar.</p>
                </div>
                <Accordion type="single" collapsible className="w-full space-y-4">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-4 data-[state=open]:bg-muted/30 transition-colors">
                            <AccordionTrigger className="text-left font-medium text-lg hover:no-underline">{faq.question}</AccordionTrigger>
                            <AccordionContent className="text-muted-foreground text-base">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    )
}
