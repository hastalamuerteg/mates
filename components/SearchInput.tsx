//React
import React, { ChangeEvent } from "react";

//Assets
import { SearchIcon } from "../icons/icons";

//Context
import { useThemeContext } from "../Contexts/ThemeProvider";

type Props = {
  onInputChange: (args: string) => void;
  id: string;
};

export default function SearchInput({ onInputChange, id }: Props) {
  const { background, primaryColor, tertiaryColor } = useThemeContext();
  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    const inputValue = e.target.value;
    if (onInputChange) {
      onInputChange(inputValue);
    }
  }

  return (
    <div className="inline mr-6">
      <label htmlFor={id}></label>
      <input
        id={id}
        type="text"
        placeholder="Search"
        className={`py-2 px-3 w-full rounded-xl bg-${background} border-2 border-${tertiaryColor} focus:bg-${tertiaryColor} active:bg-${background} transition-colors focus:placeholder-${primaryColor} focus:outline-none`}
        onChange={handleInputChange}
      ></input>
      <span className="h-full -ml-10">
        <SearchIcon style={{ fontSize: `16px` }} />
      </span>
    </div>
  );
}
