//Context
import { ThemeContext } from "../Contexts/ThemeProvider";
import { useContext } from "react";

interface Props {
  backgroundColor: string;
  children: string;
}

export default function WarningButton({ backgroundColor, children }: Props) {
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
    <button
      className={`${backgroundColor} py-2 px-6 mx-1 text-${textSecondary} rounded-full shadow-md`}
    >
      {children}
    </button>
  );
}
