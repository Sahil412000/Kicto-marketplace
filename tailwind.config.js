/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navbar_bg: "#000",
        transparent_bg: "rgba(255, 255, 255, 0.1);",
        secondary_bg: "rgba(123,63,228,0.5)",
      },
      backgroundImage: {
        marketplace_bg: "url('/src/assets/home-bg.png') ",
      },
    },
  },
  plugins: [require("daisyui")],
};
