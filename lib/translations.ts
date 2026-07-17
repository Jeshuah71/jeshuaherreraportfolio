export type Lang = "en" | "es";

const en = {
  nav: {
    about: "About",
    projects: "Projects",
    skills: "Skills",
    awards: "Awards",
    certifications: "Certifications",
    contact: "Contact",
    resume: "Résumé",
  },
  hero: {
    label: "01 / intro",
    status: "Founder · Builder · CS Student",
    tagline: "Building practical software in AI, security & data. CS student who ships real projects.",
    viewProjects: "View Projects",
    resume: "Résumé",
    quickFacts: "Quick Facts",
    degree: "B.S. Computer Science — SUU",
    location: "Provo, Utah",
    focus: "AI & Software Development",
    graduating: "Graduating August 2026",
  },
  about: {
    label: "02 / about",
    title: "About Me",
    bio1: "I'm a CS student at Southern Utah University passionate about building useful technology from scratch. I gravitate toward projects that solve real problems — whether that's automating a tedious workflow, analyzing data to find patterns, or building tools that help people work smarter.",
    bio2: "My focus areas are AI, cybersecurity, and software development. I like understanding how things work at a deep level, then building on top of that foundation.",
    interests: ["Artificial Intelligence", "Cybersecurity", "Web Development", "Data Analysis", "Automation", "Business Software"],
    current: "Current",
    previous: "Previous",
    suuDegree: "B.S. Computer Science & Software Development",
    suuMinor: "Minor in Finance",
    suuExpected: "Expected August 2026",
    snowDegree: "A.S. Computer Science",
    snowHonors: "Honors Program",
  },
  projects: {
    label: "03 / projects",
    title: "Projects",
    liveDemo: "Live Demo →",
  },
  skills: {
    label: "04 / skills",
    title: "Skills",
    categories: {
      Languages: "Languages",
      Web: "Web",
      "AI & Data": "AI & Data",
      Security: "Security",
      Tools: "Tools",
    } as Record<string, string>,
  },
  certifications: {
    label: "05 / certifications",
    title: "Certifications",
  },
  awards: {
    label: "06 / awards",
    title: "Awards & Recognition",
  },
  contact: {
    label: "07 / contact",
    title: "Let's Work Together",
    body: "I'm open to full-time roles, research opportunities, and interesting projects. Feel free to reach out — I'd love to connect.",
    resume: "Résumé",
  },
  footer: {
    backToTop: "Back to top ↑",
  },
};

const es: typeof en = {
  nav: {
    about: "Sobre Mí",
    projects: "Proyectos",
    skills: "Habilidades",
    awards: "Premios",
    certifications: "Certificaciones",
    contact: "Contacto",
    resume: "Currículum",
  },
  hero: {
    label: "01 / intro",
    status: "Fundador · Creador · Estudiante de CS",
    tagline: "Construyendo software práctico en IA, seguridad y datos. Estudiante de CS que entrega proyectos reales.",
    viewProjects: "Ver Proyectos",
    resume: "Currículum",
    quickFacts: "Datos Rápidos",
    degree: "B.S. Ciencias de la Computación — SUU",
    location: "Provo, Utah",
    focus: "IA y Desarrollo de Software",
    graduating: "Graduación Agosto 2026",
  },
  about: {
    label: "02 / sobre mí",
    title: "Sobre Mí",
    bio1: "Soy estudiante de CS en Southern Utah University, apasionado por construir tecnología útil desde cero. Me inclino hacia proyectos que resuelven problemas reales — ya sea automatizando un proceso tedioso, analizando datos para encontrar patrones, o creando herramientas que ayuden a las personas a trabajar de manera más inteligente.",
    bio2: "Mis áreas de enfoque son IA, ciberseguridad y desarrollo de software. Me gusta entender cómo funcionan las cosas a fondo, y luego construir sobre esa base.",
    interests: ["Inteligencia Artificial", "Ciberseguridad", "Desarrollo Web", "Análisis de Datos", "Automatización", "Software Empresarial"],
    current: "Actual",
    previous: "Anterior",
    suuDegree: "B.S. Ciencias de la Computación y Desarrollo de Software",
    suuMinor: "Minor en Finanzas",
    suuExpected: "Esperado Agosto 2026",
    snowDegree: "A.S. Ciencias de la Computación",
    snowHonors: "Programa de Honor",
  },
  projects: {
    label: "03 / proyectos",
    title: "Proyectos",
    liveDemo: "Demo en Vivo →",
  },
  skills: {
    label: "04 / habilidades",
    title: "Habilidades",
    categories: {
      Languages: "Lenguajes",
      Web: "Web",
      "AI & Data": "IA y Datos",
      Security: "Seguridad",
      Tools: "Herramientas",
    } as Record<string, string>,
  },
  certifications: {
    label: "05 / certificaciones",
    title: "Certificaciones",
  },
  awards: {
    label: "06 / premios",
    title: "Premios y Reconocimientos",
  },
  contact: {
    label: "07 / contacto",
    title: "Trabajemos Juntos",
    body: "Estoy abierto a roles de tiempo completo, oportunidades de investigación y proyectos interesantes. No dudes en contactarme — me encantaría conectar.",
    resume: "Currículum",
  },
  footer: {
    backToTop: "Volver arriba ↑",
  },
};

export const translations = { en, es };
