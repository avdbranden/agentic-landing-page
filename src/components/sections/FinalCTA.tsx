"use client";

import { useTranslations } from "next-intl";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

export function FinalCTA() {
  const t = useTranslations("finalCta");

  return (
    <SectionWrapper id="contact" className="bg-neutral-50 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl bg-neutral-900 px-8 py-16 text-center">
          {/* Subtle gradient overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-white/5 blur-3xl" />
          </div>

          <div className="relative">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-semibold text-white tracking-tight mb-4 max-w-xl mx-auto"
            >
              {t("headline")}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-neutral-400 max-w-md mx-auto mb-10 leading-relaxed"
            >
              {t("body")}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-3"
            >
              <motion.a
                href={`mailto:adrien@vdbranden.com?subject=${encodeURIComponent(t("emailSubject"))}`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 bg-white text-neutral-900 px-6 py-3 rounded-xl text-sm font-medium hover:bg-neutral-100 transition-colors shadow-lg"
              >
                <Mail size={15} />
                {t("primaryCTA")}
              </motion.a>
              <motion.a
                href="#case-study"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 text-sm font-medium text-neutral-300 px-6 py-3 rounded-xl border border-white/20 hover:border-white/40 hover:text-white transition-colors"
              >
                {t("secondaryCTA")}
                <ArrowRight size={14} />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
