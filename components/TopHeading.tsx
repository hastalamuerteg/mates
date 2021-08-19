//Helpers
import { THEME } from "../helpers/helpers.styles";

//Context
import { ThemeContext } from "../Contexts/ThemeProvider";
import { useContext } from "react";

interface Props {
  message: string;
}

export default function TopHeading({ message }: Props) {
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
    <div className="flex flex-grow p-4">
      <h1
        className={`text-2xl md:text-5xl text-${primaryColor} font-bold tracking-wide`}
      >
        {message}
      </h1>
    </div>
  );
}
