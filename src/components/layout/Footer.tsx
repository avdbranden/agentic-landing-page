"use client";

import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("footer");
  const links = t.raw("links") as { label: string; href: string }[];

  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="flex flex-col gap-2">
            <span className="font-semibold text-neutral-900">Agentic</span>
            <p className="text-sm text-neutral-500 max-w-xs">{t("tagline")}</p>
          </div>
          <nav className="flex flex-wrap gap-6">
            {links.map((link: { label: string; href: string }) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="mt-8 pt-8 border-t border-neutral-100 flex flex-col md:flex-row justify-between gap-2 text-xs text-neutral-400">
          <span>{t("legal")}</span>
          <span>{t("privacyNote")}</span>
        </div>
      </div>
    </footer>
  );
}
