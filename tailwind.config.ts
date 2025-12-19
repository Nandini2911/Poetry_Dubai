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
      colors: {
       poetry: "#c9b27d",          // PRIMARY BRAND GOLD
        // Deep luxury black
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "serif"],
      },
      boxShadow: {
        luxe: "0 20px 60px rgba(0,0,0,0.35)",
      },
      letterSpacing: {
        luxe: "0.22em",
      },
    },
  },
  plugins: [],
};

export default config;
