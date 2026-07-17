"use client";

import FadeIn from "@/components/FadeIn";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

export default function Contact() {
  const { lang } = useLanguage();
  const t = translations[lang].contact;

  return (
    <section id="contact" className="py-16 md:py-24 bg-dark">
      <div className="max-w-5xl mx-auto px-6 text-center flex flex-col items-center gap-8">

        <FadeIn>
          <span className="font-mono text-xs tracking-widest uppercase text-accent-light">
            {t.label}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-3">{t.title}</h2>
        </FadeIn>

        <FadeIn delay={100}>
          <p className="text-white/60 max-w-md leading-relaxed">{t.body}</p>
        </FadeIn>

        <FadeIn delay={200}>
          <a
            href="mailto:jeshuah024@gmail.com"
            className="px-6 py-3 bg-accent text-white font-mono text-xs sm:text-sm rounded hover:bg-accent/90 transition-colors break-all text-center"
          >
            jeshuah024@gmail.com
          </a>
        </FadeIn>

        <FadeIn delay={300}>
          <div className="flex gap-6">
            <a href="https://github.com/Jeshuah71" target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-white/50 hover:text-accent-light transition-colors uppercase tracking-widest">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/jeshua-herrera" target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-white/50 hover:text-accent-light transition-colors uppercase tracking-widest">
              LinkedIn
            </a>
            <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-white/50 hover:text-accent-light transition-colors uppercase tracking-widest">
              {t.resume}
            </a>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
