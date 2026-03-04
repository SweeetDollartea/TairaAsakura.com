import type { Config } from "tailwindcss";

/** Design base: 1440px. Scale down for tablet/mobile, up for ultrawide. */
const DESIGN_BASE_PX = 1440;

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-black": "var(--color-primary-black)",
        "ash-black": "var(--color-ash-black)",
        border: "var(--color-border)",
        "light-gray": "var(--color-light-gray)",
        "white-white": "var(--color-white-white)",
        "primary-white": "var(--color-primary-white)",
      },
      fontFamily: {
        sans: ["Helvetica", "Arial", "sans-serif"],
        zapfino: ["Zapfino", "cursive"],
        "zen-kurenaido": ["Zen Kurenaido", "sans-serif"],
      },
      /* Base sizes at 1440px. Use .heading-* in globals.css for fluid scaling. */
      fontSize: {
        h1: ["48px", { lineHeight: "1.2", fontWeight: "400" }],
        h2: ["40px", { lineHeight: "1.2", fontWeight: "400" }],
        "h3-bold": ["36px", { lineHeight: "1.2", fontWeight: "700" }],
        "h3-regular": ["36px", { lineHeight: "1.2", fontWeight: "400" }],
        h4: ["24px", { lineHeight: "1.3" }],
        "h4-bold": ["24px", { lineHeight: "1.3", fontWeight: "700" }],
        "h4-regular": ["24px", { lineHeight: "1.3", fontWeight: "400" }],
        h5: ["20px", { lineHeight: "1.4", fontWeight: "400" }],
        h6: ["18px", { lineHeight: "1.4", fontWeight: "700" }],
        h7: ["16px", { lineHeight: "1.4" }],
        "h7-bold": ["16px", { lineHeight: "1.4", fontWeight: "700" }],
        "h7-regular": ["16px", { lineHeight: "1.4", fontWeight: "400" }],
      },
      maxWidth: {
        design: `${DESIGN_BASE_PX}px`,
      },
      spacing: {
        design: `${DESIGN_BASE_PX}px`,
      },
      screens: {
        tablet: "768px",
        desktop: "1024px",
        design: `${DESIGN_BASE_PX}px`,
        ultrawide: "1920px",
      },
    },
  },
  plugins: [],
};

export default config;
