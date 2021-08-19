//Types
import { ILayout } from "../types/layout";

//Context
import { ThemeContext } from "../Contexts/ThemeProvider";
import { useContext } from "react";

export default function Main({ children }: ILayout) {
  const {
    background,
    color,
    primaryColor,
    secondaryColor,
    tertiaryColor,
    theme,
    textPrimary,
    textSecondary,
    toggleTheme,
  } = useContext(ThemeContext);
  return (
    <main
      className={`box-col h-screen w-full overflow-y-scroll bg-${background}`}
    >
      {children}
    </main>
  );
}
