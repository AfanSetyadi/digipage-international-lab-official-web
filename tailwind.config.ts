import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        brand: {
          50: "#eef5ff",
          100: "#d9e8ff",
          200: "#bcd8ff",
          300: "#8ec0ff",
          400: "#599dff",
          500: "#3378ff",
          600: "#1b57f5",
          700: "#1443e1",
          800: "#1736b6",
          900: "#19338f",
          950: "#142057",
        },
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-delay": "float 6s ease-in-out 2s infinite",
        "float-delay-2": "float 6s ease-in-out 4s infinite",
      },
    },
  },
  plugins: [],
};

export default config;
