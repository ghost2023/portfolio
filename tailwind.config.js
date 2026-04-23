/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./**/*.{jsx,tsx,svelte}"],
  theme: {
    extend: {
      colors: {
        background: "#050505", // Almost black
        surface: "#0a0a0a", // Very dark gray
        primary: "#d946ef", // Fuchsia-500 (Neon)
        secondary: "#6366f1", // Indigo-500
        accent: "#22d3ee", // Cyan-400
        muted: "#52525b", // Zinc-600
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["Fira Code", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "grid-pattern":
          "linear-gradient(to right, #27272a 1px, transparent 1px), linear-gradient(to bottom, #27272a 1px, transparent 1px)",
      },
      animation: {
        blob: "blob 10s infinite",
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "slide-up": "slideUp 0.5s ease-out forwards",
      },
      keyframes: {
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
        fadeIn: {
          "0%": { opacity: "0", filter: "blur(10px)" },
          "100%": { opacity: "1", filter: "blur(0)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
};
