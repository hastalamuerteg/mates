const GLOBAL_ICONOGRAPHY = {
  iconsSize: "24px",
  sideMenuLinks: "inline-block w-full my-2 py-6 rounded-r-lg",
  menuIcons: "shadow-xl p-1 rounded-lg",
  topMenuLinks: "flex justify-center items-center px-4 py-2 h-12 rounded-b-lg",
  userCardExpandDetailsIcons: "22px",
  userCardExpandDetailsCloseIcon: "26px",
};

const GLOBAL_CONTAINERS = {
  flexColumnContainer: "flex flex-col",
  flexRowContainer: "flex flex-row",
};

const palette = {
  black: "#000000",
  white: "#FFFFFF",
  lightgray: "#f8f8fb",

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
};

const THEME = {
  primary: "purple-light",
  secondary: "purple-medium",
  tertiary: "gray-dark",
  white: "white",
  text: {
    primary: "gray-dark",
    secondary: "gray-dark",
  },
  variants: {
    likes: palette.red.light,
    primary_icons: palette.white,
  },
  darkmode: "",
};

export { THEME, GLOBAL_ICONOGRAPHY, GLOBAL_CONTAINERS };
