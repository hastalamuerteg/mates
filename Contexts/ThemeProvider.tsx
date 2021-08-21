import React, { ReactNode, useContext, useState } from "react";

type Theme = true | false;
type ThemeContext = {
  darkmode: Theme;

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

  return (
    <ThemeContext.Provider
      value={{
        darkmode,
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
