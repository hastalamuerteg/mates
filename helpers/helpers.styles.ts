const ICONS_FONT = {
  icons: "24px",
  userCardIcons: "22px",
  closeIcon: "26px",
};

const palette = {
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
};

const THEME = {
  primary: "green-dark",
  secondary: "gray-medium",
  tertiary: "gray-dark",
  background: "darkpurple-dark",
  text: {
    primary: "white",
    secondary: "white",
  },
  variants: {
    likes: palette.red.light,
    primary_icons: palette.white,
    error: palette.red.light,
    warning: "red-light",
  },
};

const THEME_DARK = {
  primary: "purple-medium",
  secondary: "purple-light",
  tertiary: "gray-dark",
  background: "darkpurple-dark",
  text: {
    primary: "white",
    secondary: "white",
  },
  variants: {
    likes: palette.red.light,
    primary_icons: palette.white,
    error: palette.red.light,
    warning: "red-light",
  },
};

/*
light theme
const THEME = {
 primary: "green-dark",
  secondary: "gray-medium",
  tertiary: "white",
  background: "lightgray",
  text: {
    primary: "gray-dark",
    secondary: "white",
  },
  variants: {
    likes: palette.red.light,
    primary_icons: palette.white,
    error: palette.red.light,
    warning: "red-light",
  },
};

dark theme
const THEME_DARK = {
   primary: "green-dark",
  secondary: "gray-medium",
  tertiary: "gray-dark",
  background: "darkpurple-dark",
  text: {
    primary: "white",
    secondary: "white",
  },
  variants: {
    likes: palette.red.light,
    primary_icons: palette.white,
    error: palette.red.light,
    warning: "red-light",
  },
};
*/

export { THEME, ICONS_FONT };
