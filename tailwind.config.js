/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#080708",
        secondary: "#969696",
        tertiary: "#080708",
        "black-100": "#0a0a0a",
        "black-200": "#0a0a0a",
        "white-100": "#fff",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/hero-bg.jpg')",
      },
    },
  },
  plugins: [],
};
