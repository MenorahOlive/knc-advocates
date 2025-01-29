/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      screens: {
        "3xl": "1920px",
      },
      colors: {
        primary: "#FFFFFF",
        secondary: "#1E1E1E",
        tertiary: "#F1C25D",
      },
      zIndex: {
        max: 9999,
      },
      boxShadow: {
        boxShadow: "0 4px 4px 0  #0A2428",
      },
      fontFamily: {
        worksans: ["worksans", "sans-serif"],
        lemonmilk: ["lemonmilk", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
