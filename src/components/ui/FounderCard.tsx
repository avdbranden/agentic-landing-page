"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

interface FounderCardProps {
  name: string;
  role: string;
  bio: string;
  linkedin: string;
  photo?: string;
  delay?: number;
}

export function FounderCard({
  name,
  role,
  bio,
  linkedin,
  photo,
  delay = 0,
}: FounderCardProps) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, ease: "easeOut", delay }}
      whileHover={{ y: -3 }}
      className="group flex flex-col gap-4 bg-white rounded-2xl border border-neutral-200/80 p-6 transition-shadow duration-300 hover:shadow-lg"
    >
      <div className="flex items-start justify-between">
        <div className="w-14 h-14 rounded-xl overflow-hidden bg-neutral-100 flex items-center justify-center text-sm font-semibold text-neutral-700 shrink-0">
          {photo ? (
            <Image
              src={photo}
              alt={name}
              width={56}
              height={56}
              className="object-cover w-full h-full"
            />
          ) : (
            initials
          )}
        </div>
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-400 hover:text-neutral-900 transition-colors"
          aria-label={`${name} on LinkedIn`}
        >
          <ArrowUpRight size={18} />
        </a>
      </div>
      <div>
        <p className="font-semibold text-neutral-900">{name}</p>
        <p className="text-sm text-neutral-500">{role}</p>
      </div>
      <p className="text-sm text-neutral-600 leading-relaxed">{bio}</p>
    </motion.div>
  );
}
