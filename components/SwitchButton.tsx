import { MouseEvent } from "react";
import { THEME } from "../helpers/helpers.styles";

export default function SwitchButton() {
  function handleSwitchButton(e: MouseEvent<HTMLInputElement>) {
    console.log(e.currentTarget.checked);
  }

  return (
    <>
      <div className={`box-row justify-center items-center`}>
        <label htmlFor="switch" className={`inline-block relative w-12 h-7`}>
          <input
            type="checkbox"
            name="switch"
            id="switch"
            onClick={handleSwitchButton}
            className="hidden opacity-0 w-0 h-0 transform checked:translate-x-5"
          />
          <span
            className={`absolute cursor-pointer bg-${THEME.primary} top-0 left-0 right-0 bottom-0 rounded-full`}
          >
            <span
              className={`bottom-1 top-0 absolute w-6 h-6 rounded-full bg-${THEME.text.primary}`}
            ></span>
          </span>
        </label>
      </div>

      {/* <div
        className={`flex items-center justify-center rounded-full p-1 w-14 m-2 bg-${THEME.primary}`}
      >
        <input
          type="checkbox"
          name="toggle"
          className="rounded-full"
          onClick={handleSwitchButton}
        />
        <label className="relative w-12 h-6 flex select-none cursor-pointer">
          <span className="absolute left-0 top-0 h-full w-full bg-gray-100 rounded-full"></span>
          <span
            className={`h-6 w-6 border-2 absolute z-10 rounded-full bg-${THEME.text.primary} transition-transform duration-300 ease-in-out flex justify-center items-center`}
          ></span>
        </label>
      </div> */}
    </>
  );
}
