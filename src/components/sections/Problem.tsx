"use client";

import { useTranslations } from "next-intl";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { AnimatedCard } from "@/components/ui/AnimatedCard";
import { AlertCircle } from "lucide-react";

export function Problem() {
  const t = useTranslations("problem");
  const items = t.raw("items") as { title: string; description: string }[];

  return (
    <SectionWrapper id="problem" className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-xl mb-16">
          <h2 className="text-3xl font-semibold text-neutral-900 tracking-tight mb-4">
            {t("headline")}
          </h2>
          <p className="text-neutral-500 leading-relaxed">{t("intro")}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {items.map((item, i) => (
            <AnimatedCard key={item.title} delay={i * 0.08}>
              <div className="flex gap-4">
                <div className="shrink-0 w-8 h-8 rounded-lg bg-neutral-100 flex items-center justify-center mt-0.5">
                  <AlertCircle size={15} className="text-neutral-500" />
                </div>
                <div>
                  <h3 className="font-medium text-neutral-900 mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-sm text-neutral-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
