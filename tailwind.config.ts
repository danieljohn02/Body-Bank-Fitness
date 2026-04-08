import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black:     "var(--black)",
        surface:   "var(--surface)",
        "surface-2": "var(--surface-2)",
        "surface-3": "var(--surface-3)",
        gold:      "var(--gold)",
        "gold-dim":"var(--gold-dim)",
        muted:     "var(--muted)",
        border:    "var(--border)",
      },
      fontFamily: {
        display: ["'Bebas Neue'", "sans-serif"],
        sans:    ["'Inter'", "sans-serif"],
      },
      maxWidth: {
        container: "1280px",
      },
    },
  },
  plugins: [],
};

export default config;
