module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      black: "#000000",
      white: "#FFFFFF",
      lightgray: "#F3F5F6",

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
        dark: "#202024",
      },
      green: {
        light: "#ACFFAD",
        medium: "#71EFA3",
        dark: "#50CB93",
      },
      yellow: {
        light: "#ffff6f",
        medium: "#ffff4d",
        dark: "#ffff2b",
      },
      purple: {
        light: "#8F6BF9",
        medium: "#8257E6",
        dark: "#440c58",
      },
      darkpurple: {
        light: "#3c3c71",
        medium: "#2a2a50",
        dark: "#121214",
      },
      pink: {
        light: "#c7e",
        medium: "#9419c4",
        dark: "#671188",
      },
      red: {
        light: "#ff0746",
      },
      orange: {
        light: "#ff9862",
        medium: "#ff772f",
        dark: "#fb5700",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Poppins", "Rubik"],
      },
      animation: {
        fade_in_down: "fade_in_down .3s ease-in-out",
        spin_button: "spin_button .2s ease-in-out",
        fade: "fade .2s ease-in-out",
        fade_in_up: "fade_in_up .4s ease-in-out",
      },
      keyframes: {
        fade_in_down: {
          "0%": {
            opacity: "0",
            transform: "translateY(-15px)",
          },
          "60%": {
            opacity: "0.5",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0px)",
          },
        },
        spin_button: {
          from: {
            transform: "rotate(0deg)",
          },
          to: {
            transform: "rotate(180deg)",
          },
        },
        fade: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        fade_in_up: {
          "0%": {
            opacity: "0",
            transform: "translateY(40px)",
          },
          "60%": {
            opacity: "0.5",
            transform: "translateY(15px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0px)",
          },
        },
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
      backgroundColor: ["active"],
    },
  },
};
