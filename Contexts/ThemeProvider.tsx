import React, { Dispatch, ReactNode, useEffect, useState } from "react";
import { THEME } from "../helpers/helpers.styles";

type Theme = "light" | "dark";
type ThemeContext = {
  theme: Theme;
  background: string;
  primaryColor: string;
  secondaryColor: string;
  tertiaryColor: string;
  textPrimary: string;
  textSecondary: string;
  toggleTheme: () => void;
};
export const ThemeContext = React.createContext<ThemeContext>(
  {} as ThemeContext
);

interface Props {
  children: ReactNode;
}
export function ThemeProvider({ children }: Props) {
  const [theme, setTheme] = useState<Theme>("light");
  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  const background =
    theme === "light" ? THEME.light.background : THEME.dark.background;
  const primaryColor =
    theme === "light" ? THEME.light.primary : THEME.dark.primary;
  const secondaryColor =
    theme === "light" ? THEME.light.secondary : THEME.dark.secondary;
  const tertiaryColor =
    theme === "light" ? THEME.light.tertiary : THEME.dark.tertiary;
  const textPrimary =
    theme === "light" ? THEME.light.text.primary : THEME.dark.text.primary;
  const textSecondary =
    theme === "light" ? THEME.light.text.secondary : THEME.dark.text.secondary;

  return (
    <ThemeContext.Provider
      value={{
        theme,
        background,
        primaryColor,
        secondaryColor,
        tertiaryColor,
        textPrimary,
        textSecondary,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
