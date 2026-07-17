export type Project = {
  title: string;
  description: string;
  descriptionEs: string;
  tech: string[];
  github: string;
  demo: string;
  image?: string;
};

export const projects: Project[] = [
  {
    title: "MedGuard",
    description: "Bilingual medication interaction checker for family caregivers. Graph-powered drug lookups with plain-English reports, fuzzy search, and severity grouping. Supports English/Spanish for US and Ecuador.",
    descriptionEs: "Verificador bilingüe de interacciones medicamentosas para cuidadores familiares. Búsquedas con algoritmos de grafos, informes en lenguaje simple, búsqueda difusa y agrupación por severidad. Compatible con inglés y español para EE.UU. y Ecuador.",
    tech: ["React", "TypeScript", "Graph Algorithms", "Spanish/English"],
    github: "https://github.com/Jeshuah71/code-hackaton",
    demo: "https://code-hackaton-git-main-med-guard-s-projects.vercel.app/",
  },
  {
    title: "Coffee Compass",
    description: "Full-stack Django app for discovering and reviewing coffee shops. Features a TF-IDF chatbot, scikit-learn sentiment model, REST API, Google Maps integration, and Docker deployment.",
    descriptionEs: "Aplicación full-stack en Django para descubrir y reseñar cafeterías. Incluye chatbot TF-IDF, modelo de sentimiento con scikit-learn, API REST, integración con Google Maps y despliegue con Docker.",
    tech: ["Django", "Python", "scikit-learn", "REST API", "Docker", "PostgreSQL"],
    github: "https://github.com/Jeshuah71/coffeShop",
    demo: "https://www.coffeecornerco.com/",
  },
  {
    title: "Alpha-RAG",
    description: "B2B financial document intelligence platform. Transforms complex SEC filings and financial PDFs into instant, cited answers using RAG architecture. Built for compliance-grade accuracy — no hallucinations.",
    descriptionEs: "Plataforma B2B de inteligencia documental financiera. Transforma presentaciones ante la SEC y PDFs financieros en respuestas instantáneas y citadas usando arquitectura RAG. Precisión a nivel de cumplimiento normativo — sin alucinaciones.",
    tech: ["Python", "RAG", "LLM", "Streamlit", "Vector Store"],
    github: "https://github.com/Jeshuah71/empre",
    demo: "https://alpha-rag.com/",
  },
  {
    title: "Vultur Sentinel",
    description: "Security monitoring tool built under Vultur Software Group LLC. Full-stack application with deployed frontend for real-time threat visibility.",
    descriptionEs: "Herramienta de monitoreo de seguridad desarrollada bajo Vultur Software Group LLC. Aplicación full-stack con frontend desplegado para visibilidad de amenazas en tiempo real.",
    tech: ["React", "Vite", "Python", "Security"],
    github: "https://github.com/Jeshuah71/sentinelai",
    demo: "https://sentinelai-pi.vercel.app/",
  },
  {
    title: "CommitMuse",
    description: "Python CLI that generates commit message ideas by learning from a repo's git history. Uses Markov chains to match your project's natural commit voice.",
    descriptionEs: "CLI en Python que genera ideas para mensajes de commit aprendiendo del historial de git del repositorio. Usa cadenas de Markov para adaptar el estilo natural de commits de tu proyecto.",
    tech: ["Python", "Git", "Markov Chain", "pytest", "Ruff", "GitHub Actions"],
    github: "https://github.com/Jeshuah71/commitmuse",
    demo: "#",
    image: "/commitmuse.png",
  },
  {
    title: "Stock Analysis Tool",
    description: "Python tool that pulls stock data and identifies price trends using moving averages and visual charts.",
    descriptionEs: "Herramienta en Python que extrae datos bursátiles e identifica tendencias de precios usando medias móviles y gráficos visuales.",
    tech: ["Python", "Pandas", "Matplotlib"],
    github: "https://github.com/Jeshuah71/StockAnalisisTool",
    demo: "https://stockanalisistool-1.onrender.com/",
  },
  {
    title: "VulturJobFlow",
    description: "Automates the job application process — tracks listings, fills forms, and organizes pipeline status.",
    descriptionEs: "Automatiza el proceso de solicitud de empleo — rastrea ofertas, completa formularios y organiza el estado del pipeline.",
    tech: ["Python", "Selenium", "Automation"],
    github: "#",
    demo: "#",
  },
  {
    title: "Oracle Grid Lab",
    description: "Hands-on Oracle SQL lab environment for practicing relational database design and complex queries.",
    descriptionEs: "Entorno de laboratorio Oracle SQL para practicar diseño de bases de datos relacionales y consultas complejas.",
    tech: ["Oracle SQL", "PL/SQL", "Database Design"],
    github: "#",
    demo: "#",
  },
];
