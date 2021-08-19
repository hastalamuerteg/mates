//React
import { ReactPropTypes, RefObject, useContext } from "react";

//Assets
import { GoUpButtonIcon } from "../icons/icons";

//Context
import { ThemeContext } from "../Contexts/ThemeProvider";

interface Props {
  props?: ReactPropTypes;
  onRef: RefObject<HTMLElement>;
}
export default function GoToTopButton(props: Props) {
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
  function handleButtonClick() {
    props.onRef.current!.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div className="hidden md:flex md:fixed bottom-20 right-4 md:bottom-8 md:right-12">
      <button
        className={`text-${textPrimary} rounded-full shadow-xl`}
        onClick={handleButtonClick}
      >
        <GoUpButtonIcon
          style={{ fontSize: "28px", color: "white" }}
          className={`bg-${primaryColor} p-2 rounded-full shadow-xl transform hover:scale-110`}
        />
      </button>
    </div>
  );
}
