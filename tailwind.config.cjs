/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--color-background) / <alpha-value>)",
        "background-alt": "rgb(var(--color-background-alt) / <alpha-value>)",
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        secondary: "rgb(var(--color-secondary) / <alpha-value>)",
        accent: "rgb(var(--color-accent) / <alpha-value>)",
        cta: "rgb(var(--color-cta) / <alpha-value>)",
        "text-main": "rgb(var(--color-text) / <alpha-value>)",
      },
      fontFamily: {
        display: ["Cormorant Garamond", "serif"],
        sans: ["Montserrat", "sans-serif"],
      },
      borderRadius: {
        xl: "1.5rem",
      },
    },
  },
  plugins: [],
};
