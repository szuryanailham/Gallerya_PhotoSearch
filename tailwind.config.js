/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navbarColor: "#40513B",
        colortext: "#B6BA9C",
        bgCard: "#9DC08B",
      },
      sizing: {
        contentNavbar: "95%",
        inputBox: "75%",
      },
    },
  },
  plugins: [],
};
