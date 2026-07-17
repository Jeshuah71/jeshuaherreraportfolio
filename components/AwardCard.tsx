import { Award } from "@/data/awards";

export default function AwardCard({ title, organization, year }: Award) {
  return (
    <div className="bg-card border border-border rounded-xl p-5 flex gap-4 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-canvas border border-border flex items-center justify-center text-accent">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2z"/></svg>
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="font-semibold text-ink text-sm leading-snug">{title}</h3>
        <p className="text-xs text-ink/50 font-mono">{organization}</p>
        <p className="text-xs text-accent font-mono">{year}</p>
      </div>
    </div>
  );
}
