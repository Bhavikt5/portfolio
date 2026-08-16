/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: "#faf7f1",
          soft: "#f3efe6",
        },
        ink: {
          DEFAULT: "#1f2420",
          soft: "#4a4f49",
          faint: "#8a8d86",
        },
        navy: {
          DEFAULT: "#1c2b3a",
          light: "#2c4056",
        },
        gold: {
          DEFAULT: "#a9793f",
          light: "#c99a5f",
        },
        // Dark theme surfaces
        coal: {
          DEFAULT: "#14161a",
          soft: "#1c1f24",
          line: "#2b2f36",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1180px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(31, 36, 32, 0.04), 0 8px 24px -12px rgba(31, 36, 32, 0.12)",
        cardHover: "0 1px 2px rgba(31, 36, 32, 0.06), 0 16px 32px -12px rgba(31, 36, 32, 0.18)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.6s ease both",
      },
    },
  },
  plugins: [],
};
