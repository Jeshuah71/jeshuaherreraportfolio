"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import LanguageToggle from "@/components/LanguageToggle";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

export default function Navbar() {
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang } = useLanguage();
  const t = translations[lang].nav;

  const links = [
    { label: t.about, href: "#about" },
    { label: t.projects, href: "#projects" },
    { label: t.skills, href: "#skills" },
    { label: t.certifications, href: "#certifications" },
    { label: t.awards, href: "#awards" },
    { label: t.contact, href: "#contact" },
  ];

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-canvas/80 backdrop-blur-md border-b border-border">
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">

        <a href="#" className="font-mono text-sm text-accent font-semibold tracking-wider">
          JH
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`font-mono text-xs tracking-widest uppercase transition-colors ${
                  active === link.href.slice(1)
                    ? "text-accent"
                    : "text-ink/60 hover:text-ink"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <LanguageToggle />
          <ThemeToggle />
          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-xs font-mono tracking-widest uppercase border border-accent text-accent hover:bg-accent hover:text-white transition-colors rounded"
          >
            {t.resume}
          </a>
        </div>

        <div className="md:hidden flex items-center gap-3">
          <LanguageToggle />
          <ThemeToggle />
          <button
            className="text-ink"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
            )}
          </button>
        </div>

      </nav>

      {menuOpen && (
        <div className="md:hidden bg-canvas border-t border-border px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-mono text-xs tracking-widest uppercase text-ink/60 hover:text-accent"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs tracking-widest uppercase text-accent"
          >
            {t.resume}
          </a>
        </div>
      )}
    </header>
  );
}
