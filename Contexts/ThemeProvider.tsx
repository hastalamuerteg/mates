import React, { ReactNode, useContext, useState } from "react";

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

  const background = darkmode ? "darkpurple-dark" : "lightgray";
  const primaryColor = darkmode ? "green-dark" : "green-dark";
  const secondaryColor = darkmode ? "gray-medium" : "gray-medium";
  const tertiaryColor = darkmode ? "gray-dark" : "white";
  const textPrimary = darkmode ? "white" : "gray-dark";
  const textSecondary = darkmode ? "white" : "white";
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
