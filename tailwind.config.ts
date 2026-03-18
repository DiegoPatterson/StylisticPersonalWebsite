/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          50: "#f8f7f7",
          100: "#eae8e8",
          200: "#d4d1d1",
          300: "#b3adad",
          400: "#8b8282",
          500: "#6b6262",
          600: "#504747",
          700: "#423939",
          800: "#2f2727",
          900: "#1a1515",
          950: "#050505",
        },
        gold: {
          50: "#fef9f3",
          100: "#fdf0e1",
          200: "#fae0c6",
          300: "#f5c892",
          400: "#edaf5f",
          500: "#e5962f",
          600: "#d4781e",
          700: "#b05f1b",
          800: "#8d4d1a",
          900: "#6b3a15",
          leaf: "#D4AF37",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["Space Mono", "monospace"],
      },
      backdropBlur: {
        xs: "2px",
        sm: "4px",
        md: "12px",
        lg: "16px",
        xl: "24px",
      },
      animation: {
        "pulse-glow": "pulse-glow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: [],
};
