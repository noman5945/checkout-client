/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      RedBack: "#EA4343",
      WhiteBack: "#EAEAEA",
      LetWhite: "#FFFFFF",
      LetBlack: "#000000",
      deepRed: "#D10000",
    },
  },
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
  plugins: [require("daisyui")],
};
