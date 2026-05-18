"use client";

import { useTranslations } from "next-intl";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { motion } from "framer-motion";

export function Process() {
  const t = useTranslations("process");
  const steps = t.raw("steps") as {
    number: string;
    title: string;
    description: string;
  }[];

  return (
    <SectionWrapper id="process" className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-xl mb-16">
          <h2 className="text-3xl font-semibold text-neutral-900 tracking-tight mb-4">
            {t("headline")}
          </h2>
          <p className="text-neutral-500 leading-relaxed">{t("intro")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.1 }}
              className="relative"
            >
              {/* Connector line for desktop */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-5 left-[calc(50%+24px)] right-[-50%] h-px bg-neutral-200" />
              )}

              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-semibold text-neutral-200">
                    {step.number}
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-neutral-500 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
