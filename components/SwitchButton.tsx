//React
import { useContext } from "react";

//Context
import { ThemeContext } from "../Contexts/ThemeProvider";

export default function SwitchButton() {
  const {
    background,
    primaryColor,
    secondaryColor,
    tertiaryColor,
    theme,
    textPrimary,
    textSecondary,
    toggleTheme,
  } = useContext(ThemeContext);
  function handleSwitchButton() {
    toggleTheme();
  }

  return (
    <>
      <div className={`box-row justify-center items-center`}>
        <button
          className={`bg-${primaryColor} p-2 rounded-full active:bg-${tertiaryColor}`}
          onClick={handleSwitchButton}
        ></button>
      </div>
    </>
  );
}
