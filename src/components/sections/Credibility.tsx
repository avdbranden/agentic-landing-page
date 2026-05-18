"use client";

import { useTranslations } from "next-intl";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { motion } from "framer-motion";

export function Credibility() {
  const t = useTranslations("credibility");
  const stats = t.raw("stats") as { value: string; label: string }[];

  return (
    <SectionWrapper
      id="credibility"
      className="bg-neutral-50 py-20"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-xl mb-12">
          <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
            {t("headline")}
          </h2>
          <p className="text-neutral-500 leading-relaxed">{t("intro")}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl border border-neutral-200/80 p-6"
            >
              <p className="text-3xl font-semibold text-neutral-900 mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-neutral-500">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
