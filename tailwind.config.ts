import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "var(--color-ink)",
        canvas: "var(--color-canvas)",
        card: "var(--color-card)",
        border: "var(--color-border)",
        accent: "#0e7490",
        "accent-light": "#06b6d4",
        "accent-bright": "#22d3ee",
        dark: "#0b0f16",
      },
      fontFamily: {
        sans: ["var(--font-space-grotesk)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
