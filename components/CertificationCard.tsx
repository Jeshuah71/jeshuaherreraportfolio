import { Certification } from "@/data/certifications";

export default function CertificationCard({ name, issuer, year, pdf }: Certification) {
  return (
    <a
      href={pdf}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-card border border-border rounded-xl p-5 flex gap-4 shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-accent transition-all group"
    >
      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-canvas border border-border flex items-center justify-center text-accent group-hover:bg-accent group-hover:border-accent group-hover:text-white transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <polyline points="9 12 11 14 15 10"/>
        </svg>
      </div>
      <div className="flex flex-col gap-1 flex-1 min-w-0">
        <h3 className="font-semibold text-ink text-sm leading-snug group-hover:text-accent transition-colors">{name}</h3>
        <p className="text-xs text-ink/50 font-mono">{issuer}</p>
        <p className="text-xs text-accent font-mono">{year}</p>
      </div>
      <div className="flex-shrink-0 self-center text-ink/20 group-hover:text-accent transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
          <polyline points="15 3 21 3 21 9"/>
          <line x1="10" y1="14" x2="21" y2="3"/>
        </svg>
      </div>
    </a>
  );
}
