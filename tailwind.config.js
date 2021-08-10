module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      black: "#000",
      white: "#fff",
      lightgray: "#f8f8fb",

      gradient: {
        from: "#A281F9",
        via: "#8F6BF9",
        to: "#4C59B9",
      },

      blue: {
        light: "#5E6AC1",
        medium: "#4C59B9",
        dark: "#4853AD",
      },
      lightblue: {
        light: "#eceff5",
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
