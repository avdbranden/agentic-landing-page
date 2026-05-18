"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

export function Hero() {
  const t = useTranslations("hero");
  const emailSubject = useTranslations("finalCta")("emailSubject");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Subtle background gradient orbs */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
      >
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-neutral-100 to-neutral-50 blur-3xl opacity-60" />
        <div className="absolute top-3/4 right-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-slate-100 to-transparent blur-3xl opacity-40" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-32 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-neutral-200 bg-neutral-50 text-xs text-neutral-600 font-medium mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
          {t("badge")}
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-semibold text-neutral-900 tracking-tight leading-[1.1] mb-6 max-w-3xl mx-auto"
        >
          {t("headline")}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="text-lg text-neutral-500 max-w-xl mx-auto mb-10 leading-relaxed"
        >
          {t("subheadline")}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <motion.a
            href={`mailto:adrien@vdbranden.com?subject=${encodeURIComponent(emailSubject)}`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 bg-neutral-900 text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-neutral-700 transition-colors shadow-lg shadow-neutral-900/10"
          >
            <Mail size={15} />
            {t("primaryCTA")}
          </motion.a>
          <motion.a
            href="#case-study"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 text-sm font-medium text-neutral-700 px-6 py-3 rounded-xl border border-neutral-200 hover:border-neutral-400 hover:text-neutral-900 transition-colors"
          >
            {t("secondaryCTA")}
            <ArrowRight size={14} />
          </motion.a>
        </motion.div>

        {/* Trust line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-10 text-xs text-neutral-400"
        >
          {t("trustLabel")}
        </motion.p>

        {/* Animated workflow visual */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          className="mt-16 flex items-center justify-center gap-3 flex-wrap"
        >
          {["Email", "AI Agent", "Validation", "ERP"].map((step, i) => (
            <div key={step} className="flex items-center gap-3">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.7 + i * 0.1 }}
                className="px-4 py-2 rounded-xl bg-neutral-50 border border-neutral-200 text-sm text-neutral-700 font-medium"
              >
                {step}
              </motion.div>
              {i < 3 && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8 + i * 0.1, duration: 0.3 }}
                  className="w-8 h-px bg-neutral-300 origin-left hidden sm:block"
                />
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
