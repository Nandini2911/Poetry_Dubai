import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      /* ✅ CUSTOM BREAKPOINTS (REQUIRED) */
      screens: {
        xs: "425px",     // Mobile L
        xl2: "1440px",   // Large laptop
        "4k": "2560px",  // 4K screens
      },

      /* BRAND COLORS */
      colors: {
        poetry: "#c9b27d",
      },

      /* FONTS */
      fontFamily: {
        playfair: ["var(--font-playfair)", "serif"],
      },

      /* SHADOWS */
      boxShadow: {
        luxe: "0 20px 60px rgba(0,0,0,0.35)",
      },

      /* LETTER SPACING */
      letterSpacing: {
        luxe: "0.22em",
      },
    },
  },
  plugins: [],
};

export default config;
