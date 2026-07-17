export type SkillGroup = {
  category: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    category: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "Java", "SQL", "C++"],
  },
  {
    category: "Web",
    items: ["React", "Next.js", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    category: "AI & Data",
    items: ["OpenAI API", "Pandas", "Matplotlib", "NLP"],
  },
  {
    category: "Security",
    items: ["Threat Analysis", "Cybersecurity Fundamentals", "Linux"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "VS Code", "Oracle DB", "Selenium"],
  },
];
