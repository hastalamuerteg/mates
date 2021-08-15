//React
import React, { ChangeEvent } from "react";

//Helpers
import { THEME } from "../helpers/helpers.styles";

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
        className={`py-2 px-3 w-full rounded-xl bg-${THEME.background} border-2 border-${THEME.tertiary} focus:bg-${THEME.tertiary} active:bg-${THEME.background} transition-colors focus:placeholder-${THEME.primary} focus:outline-none`}
        onChange={handleInputChange}
      ></input>
      <span className="h-full -ml-10">
        <SearchIcon style={{ fontSize: `16px` }} />
      </span>
    </div>
  );
}
