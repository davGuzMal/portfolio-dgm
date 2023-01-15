/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      Rubik: ["Rubik", "sans-serif"],
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      '2xl': '1536px'
    },
    extend: {
      colors: {
        portdarkblue: "#2B303A",
        portsoftblue: "#AFA2FF",
        cadetblue : "#7CB4B8",
        portgrey: "#39393A",
        portrose: "#AA6373",
        portcream: "#C1B098"
      },
      backgroundImage: {
        electricity: "url('/img/bg_electricity.png')",        
      },
    },
  },
  plugins: [],
}
