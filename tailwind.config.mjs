/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
      "50%": "50%",
      16: "4rem",
    },
    extend: {
      fontFamily: {
        // sans: [...defaultTheme.fontFamily.sans],
        montserrat: ["Montserrat Variable"],
        outfit: ["Outfit Variable"],
        gameOver: ["Press Start 2P"],
      },
      backgroundImage: ({ theme }) => ({
        "text-gradient": `linear-gradient(to right bottom, ${theme(
          "colors.purple.500"
        )},  ${theme("colors.blue.500")})`,
      }),
      textColor: {
        "main-gradient": "bg-clip-text text-transparent",
      },
    },
  },
  plugins: [require("tailwindcss-patterns")],
};
