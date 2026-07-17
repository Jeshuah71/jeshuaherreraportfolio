"use client";

import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

export default function Hero() {
  const { lang } = useLanguage();
  const t = translations[lang].hero;

  return (
    <section id="hero" className="min-h-screen flex items-center pt-16">
      <div className="max-w-5xl mx-auto px-6 w-full py-12 md:py-20 flex flex-col md:flex-row items-center gap-8 md:gap-12">

        {/* Left column */}
        <div className="flex-1 flex flex-col gap-6">
          <FadeIn delay={0}>
            <span className="font-mono text-xs tracking-widest uppercase text-accent">
              {t.label}
            </span>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent-bright animate-pulse" />
              <span className="font-mono text-xs text-ink/60">{t.status}</span>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-ink">
              Jeshua Herrera
            </h1>
          </FadeIn>

          <FadeIn delay={300}>
            <p className="text-base sm:text-lg text-ink/70 max-w-md">
              {t.tagline}
            </p>
          </FadeIn>

          <FadeIn delay={400}>
            <div className="flex flex-wrap gap-3">
              <a href="#projects" className="px-5 py-2.5 bg-accent text-white text-sm font-mono rounded hover:bg-accent/90 transition-colors">
                {t.viewProjects}
              </a>
              <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 border border-border text-ink text-sm font-mono rounded hover:border-accent hover:text-accent transition-colors">
                {t.resume}
              </a>
              <a href="https://github.com/Jeshuah71" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 border border-border text-ink text-sm font-mono rounded hover:border-accent hover:text-accent transition-colors">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/jeshua-herrera" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 border border-border text-ink text-sm font-mono rounded hover:border-accent hover:text-accent transition-colors">
                LinkedIn
              </a>
            </div>
          </FadeIn>
        </div>

        {/* Right column */}
        <FadeIn delay={300} className="flex flex-col items-center gap-6">
          <Image
            src="/headshot.jpg"
            alt="Jeshua Herrera"
            width={280}
            height={280}
            className="rounded-2xl object-cover w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72"
          />

          <div className="bg-card border border-border rounded-xl p-5 flex flex-col gap-3 w-full max-w-xs shadow-sm">
            <p className="font-mono text-xs text-ink/40 uppercase tracking-widest">{t.quickFacts}</p>
            <div className="flex flex-col gap-2 text-sm text-ink/80">
              <span className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent flex-shrink-0"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
                {t.degree}
              </span>
              <span className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent flex-shrink-0"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                {t.location}
              </span>
              <span className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent flex-shrink-0"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                {t.focus}
              </span>
              <span className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent flex-shrink-0"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                {t.graduating}
              </span>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
