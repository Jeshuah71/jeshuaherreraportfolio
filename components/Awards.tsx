"use client";

import { awards } from "@/data/awards";
import AwardCard from "@/components/AwardCard";
import FadeIn from "@/components/FadeIn";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

export default function Awards() {
  const { lang } = useLanguage();
  const t = translations[lang].awards;

  return (
    <section id="awards" className="py-16 md:py-24 bg-card">
      <div className="max-w-5xl mx-auto px-6">

        <FadeIn>
          <span className="font-mono text-xs tracking-widest uppercase text-accent">
            {t.label}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-ink mt-3 mb-8 md:mb-10">{t.title}</h2>
        </FadeIn>

        <div className="grid sm:grid-cols-2 gap-4">
          {awards.map((award, i) => (
            <FadeIn key={award.title + award.year} delay={i * 75}>
              <AwardCard {...award} />
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
