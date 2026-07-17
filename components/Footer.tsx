"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

export default function Footer() {
  const { lang } = useLanguage();
  const t = translations[lang].footer;

  return (
    <footer className="bg-dark border-t border-white/10 py-8">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">

        <p className="font-mono text-xs text-white/30">
          © 2026 Jeshua Herrera. Built with Next.js & Tailwind CSS.
        </p>

        <p className="font-mono text-xs text-white/20 italic">
          Psalm 90:17
        </p>

        <a
          href="#hero"
          className="font-mono text-xs text-white/30 hover:text-accent-light transition-colors uppercase tracking-widest"
        >
          {t.backToTop}
        </a>

      </div>
    </footer>
  );
}
