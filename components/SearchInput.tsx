//React
import React, { ChangeEvent } from "react";

//Helpers
import { ICONS_FONT, THEME } from "../helpers/helpers.styles";

//Assets
import { SearchIcon } from "../icons/icons";

type Props = {
  onInputChange: (args: string) => void;
  id: string;
};

export default function SearchInput({ onInputChange, id }: Props) {
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
        className={`p-2 pl-3 rounded-full border border-${THEME.primary} transition-all focus:outline-none focus:border-${THEME.primary} focus:bg-${THEME.tertiary} focus:placeholder-${THEME.text.primary}`}
        onChange={handleInputChange}
      ></input>
      <span className="text-center h-auto -ml-10 w-full">
        <SearchIcon style={{ fontSize: `${ICONS_FONT.icons}` }} />
      </span>
    </div>
  );
}
