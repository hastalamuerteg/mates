//React
import { ReactPropTypes, RefObject } from "react";

//Assets
import { GoUpButtonIcon } from "../icons/icons";

//Context
import { useThemeContext } from "../Contexts/ThemeProvider";

interface Props {
  props?: ReactPropTypes;
  onRef: RefObject<HTMLElement>;
}
export default function GoToTopButton(props: Props) {
  function handleButtonClick() {
    props.onRef.current!.scrollIntoView({ behavior: "smooth" });
  }
  const { darkmode } = useThemeContext();
  return (
    <div className="hidden md:flex md:fixed bottom-20 right-4 md:bottom-8 md:right-12">
      <button
        className={`${
          darkmode ? "text-dark-text-primary" : "text-dark-text-primary"
        } rounded-full shadow-xl`}
        onClick={handleButtonClick}
      >
        <GoUpButtonIcon
          style={{ fontSize: "28px", color: "white" }}
          className={`bg-light-primary p-2 rounded-full shadow-xl transform hover:scale-110`}
        />
      </button>
    </div>
  );
}
