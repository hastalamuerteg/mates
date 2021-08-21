import React, { ReactNode, useContext, useState } from "react";
import { THEME } from "../helpers/helpers.styles";

type Theme = true | false;
type ThemeContext = {
  darkmode: Theme;
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
  const [darkmode, setDarkmode] = useState<Theme>(false);
  function toggleTheme() {
    setDarkmode(!darkmode);
  }

  const background = darkmode ? THEME.dark.background : THEME.light.background;
  const primaryColor = darkmode ? THEME.dark.primary : THEME.light.primary;
  const secondaryColor = darkmode
    ? THEME.dark.secondary
    : THEME.light.secondary;
  const tertiaryColor = darkmode ? THEME.dark.tertiary : THEME.light.tertiary;
  const textPrimary = darkmode
    ? THEME.dark.text.primary
    : THEME.light.text.primary;
  const textSecondary = darkmode
    ? THEME.dark.text.secondary
    : THEME.light.text.secondary;
  return (
    <ThemeContext.Provider
      value={{
        darkmode,
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

export function useThemeContext() {
  return useContext(ThemeContext);
}
