import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        syne: ["Syne", "sans-serif"],
        dm: ["DM Sans", "sans-serif"],
      },
      colors: {
        // Brand
        mint: "#00D68F",
        "mint-dim": "#00b876",

        // Dark theme text
        ink: "#FFFFFF",
        "ink-2": "rgba(255,255,255,0.75)",
        "ink-3": "rgba(255,255,255,0.50)",
        "ink-4": "rgba(255,255,255,0.20)",

        // Electric (kept for backward compat)
        electric: "#00D68F",
        "electric-dark": "#00b876",
        "electric-light": "rgba(0,214,143,0.12)",

        // Surfaces
        surface: "#111111",
        "surface-2": "#161616",
      },
      animation: {
        "pulse-dot": "pulse-dot 2s ease-in-out infinite",
        drift: "drift 14s ease-in-out infinite",
        drift2: "drift 18s ease-in-out infinite reverse",
        shimmer: "shimmer 4s linear infinite",
      },
      keyframes: {
        "pulse-dot": {
          "0%,100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.4", transform: "scale(0.75)" },
        },
        drift: {
          "0%,100%": { transform: "translateY(0) rotate(0deg)" },
          "33%": { transform: "translateY(-18px) rotate(4deg)" },
          "66%": { transform: "translateY(10px) rotate(-3deg)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
