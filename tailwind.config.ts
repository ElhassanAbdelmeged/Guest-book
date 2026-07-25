import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Playing card theme palette
        cardred: {
          DEFAULT: "#B91C1C",
          light: "#DC2626",
          dark: "#7F1D1D",
        },
        ink: {
          DEFAULT: "#1A1A2E",
          soft: "#252545",
        },
        gold: {
          DEFAULT: "#D4AF37",
          light: "#E8C86A",
          dark: "#A88A2A",
        },
        cream: {
          DEFAULT: "#FFF8F0",
          dark: "#F3E9D9",
        },
        felt: {
          DEFAULT: "#FFFFFF",
          dark: "#F5F3EE",
          light: "#FFFFFF",
        },
        petal: {
          pink: "#F4A6B7",
          rose: "#EE93A8",
          peach: "#F6C89F",
          lavender: "#CBB6E8",
          mint: "#A9D8C4",
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', "serif"],
        body: ['"Inter"', "sans-serif"],
        arabic: ['"Cairo"', "sans-serif"],
        script: ['"Great Vibes"', "cursive"],
      },
      boxShadow: {
        card: "0 10px 30px -5px rgba(0,0,0,0.4), 0 2px 8px rgba(0,0,0,0.2)",
        cardhover: "0 24px 50px -8px rgba(0,0,0,0.55)",
        gold: "0 0 20px rgba(212,175,55,0.5)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-18px) rotate(6deg)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        dealIn: {
          "0%": { transform: "translateY(-120vh) rotate(-40deg) scale(0.6)", opacity: "0" },
          "100%": { transform: "translateY(0) rotate(0deg) scale(1)", opacity: "1" },
        },
        pulseGold: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(212,175,55,0.5)" },
          "50%": { boxShadow: "0 0 25px 6px rgba(212,175,55,0.35)" },
        },
        petalFall: {
          "0%": { transform: "translateY(-10vh) rotate(0deg)", opacity: "0" },
          "10%": { opacity: "0.85" },
          "90%": { opacity: "0.85" },
          "100%": { transform: "translateY(110vh) rotate(360deg)", opacity: "0" },
        },
        petalSway: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(24px)" },
        },
        sparkleFall: {
          "0%": { transform: "translateY(-10vh) scale(0.5) rotate(0deg)", opacity: "0" },
          "12%": { opacity: "1" },
          "50%": { transform: "translateY(50vh) scale(1.15) rotate(180deg)", opacity: "0.6" },
          "88%": { opacity: "1" },
          "100%": { transform: "translateY(110vh) scale(0.5) rotate(360deg)", opacity: "0" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        dealIn: "dealIn 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        pulseGold: "pulseGold 3s ease-in-out infinite",
        petalFall: "petalFall 10s linear infinite",
        petalSway: "petalSway 3.5s ease-in-out infinite",
        sparkleFall: "sparkleFall 9s linear infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
