module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      light: {
        primary: "#50CB93",
        secondary: "#4c5659",
        tertiary: "#FFFFFF",
        background: "#F3F5F6",
        text: {
          primary: "#FFFFFF",
          secondary: "#202024",
        },
      },

      dark: {
        primary: "#50CB93",
        secondary: "#4c5659",
        tertiary: "#202024",
        background: "#121214",
        text: {
          primary: "#FFFFFF",
          secondary: "#FFFFFF",
        },
      },
      warning: "#ff0746",
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
      backgroundColor: ["active", "checked"],
      borderColor: ["checked"],
    },
  },
};
