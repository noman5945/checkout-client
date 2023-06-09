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
      fadedbg: "#F4F4F4",
      deepfadebg: " #E7E7E7",
      greenopen: "#189D02",
      yellowStar: "#F1DA07",
    },
  },
  daisyui: {
    themes: [
      "light",
      {
        mytheme: {
          error: "#D00000",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
