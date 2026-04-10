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
        cream:       "var(--cream)",
        "cream-2":   "var(--cream-2)",
        espresso:    "var(--espresso)",
        cognac:      "var(--cognac)",
        "cognac-dim":"var(--cognac-dim)",
        "warm-white":"var(--warm-white)",
        muted:       "var(--muted)",
        border:      "var(--border)",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans:    ["var(--font-body)", "sans-serif"],
      },
      maxWidth: {
        container: "1280px",
      },
    },
  },
  plugins: [],
};

export default config;
