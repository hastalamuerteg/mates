//React
import { ReactPropTypes, RefObject } from "react";

//Helpers
import { THEME } from "../helpers/helpers.styles";

//Assets
import { GoUpButtonIcon } from "../icons/icons";

interface Props {
  props?: ReactPropTypes;
  onRef: RefObject<HTMLElement>;
}
export default function GoToTopButton(props: Props) {
  function handleButtonClick() {
    props.onRef.current!.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div className="hidden md:flex md:fixed bottom-20 right-4 md:bottom-8 md:right-12">
      <button
        className={`text-${THEME.white} rounded-full shadow-xl`}
        onClick={handleButtonClick}
      >
        <GoUpButtonIcon
          style={{ fontSize: "28px", color: "white" }}
          className={`bg-${THEME.primary} p-2 rounded-full shadow-xl`}
        />
      </button>
    </div>
  );
}
