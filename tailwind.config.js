module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      black: "#000000",
      white: "#FFFFFF",
      lightgray: "#f8f8fb",

      blue: {
        light: "#4141d3",
        medium: "#2d2dc5",
        dark: "#1a1a72",
      },
      lightblue: {
        light: "#3eeeee",
      },
      gray: {
        light: "#b3bbbe",
        medium: "#4c5659",
        dark: "#222222",
      },
      green: {
        light: "#ACFFAD",
        medium: "#71EFA3",
        dark: "#50CB93",
      },
      yellow: {
        light: "#f5f699",
      },
      purple: {
        light: "#8F6BF9",
        medium: "#825EF9",
        dark: "#440c58",
      },
      pink: {
        light: "#c7e",
        medium: "#9419c4",
        dark: "#671188",
      },
      red: {
        light: "#ff0746",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Poppins", "Rubik"],
      },
    },
  },
  plugins: [],
};
