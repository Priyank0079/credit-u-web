import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    screens: {
      xs: "375px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px"
    },
    extend: {
      colors: {
        brand: {
          50: "#e8f1fa",
          100: "#c8ddf2",
          200: "#9cc3e8",
          300: "#6fa8dc",
          400: "#4a8dc7",
          500: "#1a5a9e",
          600: "#0b3c6d", // primary — logo navy
          700: "#093158",
          800: "#062644",
          900: "#041b30"
        },
        accent: {
          green: "#12a24a",
          "green-light": "#e6f7ed",
          gold: "#f9be1a",
          "gold-light": "#fef9e7",
          "gold-dark": "#d4a017"
        }
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, #0b3c6d 0%, #1a5a9e 50%, #4a8dc7 100%)",
        "soft-gradient":
          "radial-gradient(1200px 600px at 0% 0%, #e8f1fa 0%, transparent 60%), radial-gradient(800px 400px at 100% 0%, #c8ddf2 0%, transparent 60%), radial-gradient(700px 400px at 100% 100%, #9cc3e8 0%, transparent 60%)"
      },
      boxShadow: {
        card: "0 10px 30px -10px rgba(11, 60, 109, 0.30)",
        soft: "0 8px 24px -8px rgba(11, 60, 109, 0.18)"
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "fade-up": "fadeUp 0.6s ease-out both"
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" }
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        }
      }
    }
  },
  plugins: []
};

export default config;
