"use client";

import { useTranslations } from "next-intl";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { FounderCard } from "@/components/ui/FounderCard";

const founderPhotos: Record<string, string> = {
  "Adrien Van den Branden": "/adrien-vdb.png",
  "James de Wasseige": "/james-dw.jpeg",
};

export function Founders() {
  const t = useTranslations("founders");
  const people = t.raw("people") as {
    name: string;
    role: string;
    bio: string;
    linkedin: string;
  }[];

  return (
    <SectionWrapper id="founders" className="bg-neutral-50 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-xl mb-12">
          <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
            {t("headline")}
          </h2>
          <p className="text-neutral-500 leading-relaxed">{t("intro")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
          {people.map((person, i) => (
            <FounderCard
              key={person.name}
              name={person.name}
              role={person.role}
              bio={person.bio}
              linkedin={person.linkedin}
              photo={founderPhotos[person.name]}
              delay={i * 0.1}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
