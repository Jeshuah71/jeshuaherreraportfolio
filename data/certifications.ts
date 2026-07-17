export type Certification = {
  name: string;
  issuer: string;
  year: string;
  pdf: string;
};

export const certifications: Certification[] = [
  {
    name: "Oracle Cloud Infrastructure 2025 AI Foundations Associate",
    issuer: "Oracle University",
    year: "2025",
    pdf: "/certs/cert-oracle-ai.pdf",
  },
  {
    name: "Oracle Cloud Infrastructure 2025 Foundations Associate",
    issuer: "Oracle University",
    year: "2025",
    pdf: "/certs/cert-oracle-foundations.pdf",
  },
  {
    name: "Oracle Database@AWS Certified Architect Professional",
    issuer: "Oracle University",
    year: "2025",
    pdf: "/certs/cert-oracle-aws.pdf",
  },
  {
    name: "Claude 101",
    issuer: "Anthropic",
    year: "2025",
    pdf: "/certs/cert-claude-101.pdf",
  },
];
