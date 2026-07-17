"use client";

import { skills } from "@/data/skills";
import FadeIn from "@/components/FadeIn";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

export default function Skills() {
  const { lang } = useLanguage();
  const t = translations[lang].skills;

  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-6">

        <FadeIn>
          <span className="font-mono text-xs tracking-widest uppercase text-accent">
            {t.label}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-ink mt-3 mb-8 md:mb-10">{t.title}</h2>
        </FadeIn>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((group, i) => (
            <FadeIn key={group.category} delay={i * 75}>
              <div className="bg-card border border-border rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                <p className="font-mono text-xs text-accent uppercase tracking-widest mb-3">
                  {t.categories[group.category] ?? group.category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="px-2 py-1 bg-canvas border border-border text-xs font-mono text-ink/70 rounded"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
