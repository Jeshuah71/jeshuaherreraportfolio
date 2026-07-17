"use client";

import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import FadeIn from "@/components/FadeIn";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

export default function Projects() {
  const { lang } = useLanguage();
  const t = translations[lang].projects;

  return (
    <section id="projects" className="py-16 md:py-24 bg-card">
      <div className="max-w-5xl mx-auto px-6">

        <FadeIn>
          <span className="font-mono text-xs tracking-widest uppercase text-accent">
            {t.label}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-ink mt-3 mb-8 md:mb-10">{t.title}</h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <FadeIn key={project.title} delay={i * 100} className="h-full">
              <ProjectCard {...project} />
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
