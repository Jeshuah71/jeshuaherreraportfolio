"use client";

import FadeIn from "@/components/FadeIn";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

export default function About() {
  const { lang } = useLanguage();
  const t = translations[lang].about;

  return (
    <section id="about" className="py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-6">

        <FadeIn>
          <span className="font-mono text-xs tracking-widest uppercase text-accent">
            {t.label}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-ink mt-3 mb-8 md:mb-10">{t.title}</h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">

          <FadeIn delay={100}>
            <div className="flex flex-col gap-4">
              <p className="text-ink/70 leading-relaxed">{t.bio1}</p>
              <p className="text-ink/70 leading-relaxed">{t.bio2}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {t.interests.map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1 bg-card border border-border text-ink/70 text-xs font-mono rounded-full"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>

          <div className="flex flex-col gap-4">
            <FadeIn delay={200}>
              <div className="bg-card border border-border rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                <p className="font-mono text-xs text-accent uppercase tracking-widest mb-2">{t.current}</p>
                <h3 className="font-bold text-ink">Southern Utah University</h3>
                <p className="text-sm text-ink/60">{t.suuDegree}</p>
                <p className="text-sm text-ink/60">{t.suuMinor}</p>
                <p className="text-sm text-ink/60">{t.suuExpected}</p>
              </div>
            </FadeIn>
            <FadeIn delay={300}>
              <div className="bg-card border border-border rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                <p className="font-mono text-xs text-accent uppercase tracking-widest mb-2">{t.previous}</p>
                <h3 className="font-bold text-ink">Snow College</h3>
                <p className="text-sm text-ink/60">{t.snowDegree}</p>
                <p className="text-sm text-ink/60">{t.snowHonors}</p>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}
