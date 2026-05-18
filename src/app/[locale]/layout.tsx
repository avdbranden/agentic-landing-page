import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "../globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const isEn = locale === "en";
  const title = "Agentic — AI Automation Consulting";
  const description = isEn
    ? "Custom AI automation for operations-heavy businesses. Reduce repetitive manual work, cut errors, and scale without adding headcount."
    : "Automatisation IA sur mesure pour les entreprises à forte composante opérationnelle. Réduisez le travail manuel répétitif et passez à l'échelle.";

  const baseUrl = "https://agentic.consulting";
  const url = locale === "fr" ? `${baseUrl}/fr` : baseUrl;

  return {
    title,
    description,
    keywords: [
      "AI automation consulting",
      "ERP automation",
      "operational AI systems",
      "workflow automation",
      "email automation",
      "AI order processing",
    ],
    authors: [
      { name: "Adrien Van den Branden" },
      { name: "James" },
    ],
    openGraph: {
      type: "website",
      url,
      title,
      description,
      siteName: "Agentic",
      locale: locale === "fr" ? "fr_FR" : "en_GB",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical: url,
      languages: {
        en: baseUrl,
        fr: `${baseUrl}/fr`,
      },
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "en" | "fr")) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-neutral-900">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
