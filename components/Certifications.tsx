"use client";

import { certifications } from "@/data/certifications";
import CertificationCard from "@/components/CertificationCard";
import FadeIn from "@/components/FadeIn";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

export default function Certifications() {
  const { lang } = useLanguage();
  const t = translations[lang].certifications;

  return (
    <section id="certifications" className="py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-6">

        <FadeIn>
          <span className="font-mono text-xs tracking-widest uppercase text-accent">
            {t.label}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-ink mt-3 mb-8 md:mb-10">{t.title}</h2>
        </FadeIn>

        <div className="grid sm:grid-cols-2 gap-4">
          {certifications.map((cert, i) => (
            <FadeIn key={cert.name} delay={i * 75} className="h-full">
              <CertificationCard {...cert} />
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
