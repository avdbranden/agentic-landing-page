"use client";

import { useTranslations } from "next-intl";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { AnimatedCard } from "@/components/ui/AnimatedCard";
import {
  Clock,
  TrendingDown,
  Zap,
  ShieldCheck,
  BarChart3,
  Eye,
} from "lucide-react";

const icons = [Clock, Zap, TrendingDown, ShieldCheck, BarChart3, Eye];

export function Benefits() {
  const t = useTranslations("benefits");
  const items = t.raw("items") as { title: string; description: string }[];

  return (
    <SectionWrapper id="benefits" className="bg-neutral-50 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-xl mb-16">
          <h2 className="text-3xl font-semibold text-neutral-900 tracking-tight">
            {t("headline")}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <AnimatedCard
                key={item.title}
                delay={i * 0.07}
                className="bg-white"
              >
                <div className="w-9 h-9 rounded-xl bg-neutral-100 flex items-center justify-center mb-4">
                  <Icon size={16} className="text-neutral-700" />
                </div>
                <h3 className="font-medium text-neutral-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  {item.description}
                </p>
              </AnimatedCard>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
