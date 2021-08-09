import { ReactPropTypes, RefObject } from "react";
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
    <div className="fixed bottom-8 right-12">
      <button
        className="text-white rounded-full shadow-xl"
        onClick={handleButtonClick}
      >
        <GoUpButtonIcon
          style={{ fontSize: "32px", color: "white" }}
          className="bg-blue-light p-2 rounded-full shadow-xl"
        />
      </button>
    </div>
  );
}
