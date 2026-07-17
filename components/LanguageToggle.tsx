"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function LanguageToggle() {
  const { lang, toggle } = useLanguage();
  return (
    <button
      onClick={toggle}
      aria-label="Toggle language"
      className="w-8 h-8 flex items-center justify-center rounded-lg border border-border text-ink/60 hover:text-accent hover:border-accent transition-colors font-mono text-xs font-bold tracking-wider"
    >
      {lang === "en" ? "ES" : "EN"}
    </button>
  );
}
