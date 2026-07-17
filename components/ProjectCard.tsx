"use client";

import { Project } from "@/data/projects";
import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

export default function ProjectCard({ title, description, descriptionEs, tech, github, demo, image }: Project) {
  const { lang } = useLanguage();
  const liveDemo = translations[lang].projects.liveDemo;
  const desc = lang === "es" ? descriptionEs : description;

  return (
    <div className="h-full bg-card border border-border rounded-xl overflow-hidden flex flex-col shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">

      {image && (
        <div className="relative w-full h-44 bg-[#0b0f16]">
          <Image src={image} alt={`${title} demo`} fill className="object-contain p-2" />
        </div>
      )}

      <div className="p-6 flex flex-col gap-4 flex-1">
        <h3 className="text-lg font-bold text-ink">{title}</h3>

        <p className="text-sm text-ink/60 leading-relaxed flex-1">{desc}</p>

        <div className="flex flex-wrap gap-2">
          {tech.map((t) => (
            <span key={t} className="px-2 py-1 bg-canvas border border-border text-xs font-mono text-ink/50 rounded">
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-3 pt-2">
          {github !== "#" && (
            <a href={github} target="_blank" rel="noopener noreferrer" className="text-xs font-mono text-accent hover:underline">
              GitHub →
            </a>
          )}
          {demo !== "#" && (
            <a href={demo} target="_blank" rel="noopener noreferrer" className="text-xs font-mono text-accent hover:underline">
              {liveDemo}
            </a>
          )}
        </div>
      </div>

    </div>
  );
}
