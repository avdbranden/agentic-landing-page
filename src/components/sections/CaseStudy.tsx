"use client";

import { useTranslations } from "next-intl";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { motion } from "framer-motion";
import { ArrowRight, Quote } from "lucide-react";

export function CaseStudy() {
  const t = useTranslations("caseStudy");
  const beforeItems = t.raw("beforeItems") as string[];
  const afterItems = t.raw("afterItems") as string[];
  const flowSteps = t.raw("flowSteps") as string[];
  const outcomes = t.raw("outcomes") as {
    value: string;
    label: string;
  }[];

  return (
    <SectionWrapper id="case-study" className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-neutral-200 bg-neutral-50 text-xs text-neutral-500 font-medium mb-6">
            {t("tag")}
          </span>
          <h2 className="text-3xl font-semibold text-neutral-900 tracking-tight mb-4 max-w-2xl">
            {t("headline")}
          </h2>
          <p className="text-neutral-500 max-w-xl leading-relaxed">
            {t("context")}
          </p>
        </div>

        {/* Flow diagram */}
        <div className="mb-16">
          <p className="text-xs text-neutral-400 uppercase tracking-wider mb-4">
            {t("flowLabel")}
          </p>
          <div className="flex items-center gap-2 flex-wrap">
            {flowSteps.map((step, i) => (
              <div key={step} className="flex items-center gap-2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="px-4 py-2.5 rounded-xl bg-neutral-900 text-white text-sm font-medium"
                >
                  {step}
                </motion.div>
                {i < flowSteps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.1 }}
                  >
                    <ArrowRight size={16} className="text-neutral-400" />
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Before / After grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {/* Before */}
          <div className="rounded-2xl border border-neutral-200/80 bg-neutral-50 p-6">
            <h3 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-4">
              {t("beforeTitle")}
            </h3>
            <ul className="space-y-3">
              {beforeItems.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-neutral-600"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-neutral-400 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* After */}
          <div className="rounded-2xl border border-neutral-200/80 bg-white p-6">
            <h3 className="text-sm font-semibold text-neutral-900 uppercase tracking-wider mb-4">
              {t("afterTitle")}
            </h3>
            <ul className="space-y-3">
              {afterItems.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-neutral-700"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-neutral-800 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Outcomes */}
        <div className="mb-12">
          <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-6">
            {t("outcomeTitle")}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {outcomes.map((o, i) => (
              <motion.div
                key={o.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border border-neutral-200/80 rounded-2xl p-6 bg-white"
              >
                <p className="text-3xl font-semibold text-neutral-900 mb-1">
                  {o.value}
                </p>
                <p className="text-sm text-neutral-500">{o.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Quote */}
        <div className="rounded-2xl bg-neutral-50 border border-neutral-200/80 p-8">
          <Quote size={20} className="text-neutral-300 mb-4" />
          <p className="text-lg text-neutral-700 leading-relaxed mb-4">
            {t("quote")}
          </p>
          <p className="text-sm text-neutral-400">{t("quoteAuthor")}</p>
        </div>
      </div>
    </SectionWrapper>
  );
}
