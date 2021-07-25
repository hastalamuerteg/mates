import { SearchIcon } from "../icons/icons";
import { basicGlobalStyles } from "../helpers/helpers.styles";
import React, { ChangeEvent } from "react";
import { generateID } from "../services/idService";

type Props = {
  onInputChange: (args: string) => void;
};

export default function SearchInput({ onInputChange }: Props) {
  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    const searchedFriend = e.target.value;
    if (onInputChange) {
      onInputChange(searchedFriend);
    }
  }

  return (
    <div className="inline mr-6">
      <input
        id={generateID()}
        type="text"
        placeholder="Search"
        className="bg-gray-100 p-2 pl-3 rounded-full  border transition-all focus:outline-none focus:bg-white focus:placeholder-blue-700"
        onChange={handleInputChange}
      ></input>
      <span className="text-center h-auto -ml-10 w-full">
        <SearchIcon style={{ fontSize: `${basicGlobalStyles.iconsSize}` }} />
      </span>
    </div>
  );
}
