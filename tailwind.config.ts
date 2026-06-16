import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // NHS-blue family: the research-backed healthcare trust blue (Pantone 300)
        "who-blue": "#005EB8",
        "who-blue-dark": "#00488F",
        "who-blue-tint": "#EAF2FB",
        "cta-green": "#27AE60",
        "cta-green-dark": "#1F9150",
        cream: "#F7FAFC",
        ink: "#0E2233",
      },
      fontFamily: {
        // Poppins everywhere (applied to both heading and body utilities)
        serif: ["var(--font-poppins)", "system-ui", "sans-serif"],
        sans: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
      keyframes: {
        pulseCta: {
          "0%, 100%": { transform: "scale(1)", boxShadow: "0 10px 25px -5px rgba(39,174,96,0.5)" },
          "50%": { transform: "scale(1.03)", boxShadow: "0 18px 40px -8px rgba(39,174,96,0.7)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "pulse-cta": "pulseCta 1.8s ease-in-out infinite",
        "fade-up": "fadeUp 0.7s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
