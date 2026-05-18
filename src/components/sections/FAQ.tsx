"use client";

import { useTranslations } from "next-intl";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  const t = useTranslations("faq");
  const items = t.raw("items") as { question: string; answer: string }[];

  return (
    <SectionWrapper id="faq" className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-xl mb-12">
          <h2 className="text-3xl font-semibold text-neutral-900 tracking-tight">
            {t("headline")}
          </h2>
        </div>

        <div className="max-w-2xl">
          <Accordion multiple={false} className="space-y-2">
            {items.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border border-neutral-200/80 rounded-xl px-5 py-1 bg-white data-[state=open]:bg-neutral-50"
              >
                <AccordionTrigger className="text-sm font-medium text-neutral-900 hover:no-underline text-left py-4">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-neutral-500 leading-relaxed pb-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </SectionWrapper>
  );
}
