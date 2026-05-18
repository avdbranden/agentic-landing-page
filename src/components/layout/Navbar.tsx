"use client";

import { useTranslations, useLocale } from "next-intl";
import { usePathname, useRouter, Link } from "@/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const t = useTranslations();
  const pathname = usePathname();
  const router = useRouter();
  const currentLocale = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const otherLocale = currentLocale === "en" ? "fr" : "en";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: t("nav.services"), href: "#solution" },
    { label: t("nav.caseStudy"), href: "#case-study" },
    { label: t("nav.process"), href: "#process" },
    { label: t("nav.faq"), href: "#faq" },
  ];

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-neutral-200/60 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-semibold text-lg tracking-tight text-neutral-900"
        >
          Agentic
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => router.push(pathname, { locale: otherLocale })}
            className="text-sm text-neutral-500 hover:text-neutral-900 font-medium transition-colors"
            aria-label="Switch language"
          >
            {t(`langToggle.${otherLocale}`)}
          </button>
          <a
            href={`mailto:adrien@vdbranden.com?subject=${encodeURIComponent(t("finalCta.emailSubject"))}`}
            className="text-sm font-medium bg-neutral-900 text-white px-4 py-2 rounded-lg hover:bg-neutral-700 transition-colors"
          >
            {t("nav.emailUs")}
          </a>
        </div>

        <button
          className="md:hidden text-neutral-700"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-b border-neutral-200 overflow-hidden"
          >
            <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-neutral-700 py-1"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex items-center gap-4 pt-2 border-t border-neutral-100">
                <button
                  onClick={() => {
                    router.push(pathname, { locale: otherLocale });
                    setMobileOpen(false);
                  }}
                  className="text-sm text-neutral-500 font-medium"
                >
                  {t(`langToggle.${otherLocale}`)}
                </button>
                <a
                  href={`mailto:adrien@vdbranden.com?subject=${encodeURIComponent(t("finalCta.emailSubject"))}`}
                  className="text-sm font-medium bg-neutral-900 text-white px-4 py-2 rounded-lg"
                >
                  {t("nav.emailUs")}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
