//Next components
import Image from "next/image";

//React
import { useState } from "react";

//Helpers
import { THEME, GLOBAL_CONTAINERS } from "../helpers/helpers.styles";

//Types
import { IUsers } from "../types/users";

//Components
import UserCardExpandDetails from "./UserCardExpandDetails";

interface Props {
  children: IUsers;
}

export default function UserCard({ children: user }: Props) {
  const [showUserDetails, setShowUserDetails] = useState(false);
  const { name, picture, login, dob } = user;

  function handleUserCardClick() {
    setShowUserDetails(true);
  }

  return (
    <>
      <UserCardExpandDetails
        onUserCardClick={showUserDetails}
        onUserCardClose={setShowUserDetails}
        user={user}
      />
      <div
        onClick={handleUserCardClick}
        className={`${GLOBAL_CONTAINERS.flexColumnContainer} ${showUserDetails} justify-around text-center w-40 h-52 p-2 shadow-2xl rounded-lg m-1 cursor-pointer relative bg-${THEME.white} transition-all group hover:bg-${THEME.primary} md:flex md:flex-row md:justify-around md:text-left md:w-96 md:h-auto`}
      >
        <picture>
          <Image
            alt={`${name.first}, ${name.last}`}
            src={picture.medium}
            width={75}
            height={75}
            className="rounded-full"
          />
        </picture>
        <div
          className={`flex flex-col justify-around items-center md:flex md:justify-center md:items-start`}
        >
          <h3
            className={`text-lg font-semibold text-${THEME.primary} transition-all group-hover:text-${THEME.white}`}
          >{`${name.first}, ${name.last}`}</h3>
          <p className={`text-sm group-hover:text-${THEME.white}`}>
            {login.username}
          </p>
          <p
            className={`text-sm group-hover:text-${THEME.white}`}
          >{`${dob.age} years old`}</p>
        </div>
      </div>
    </>
  );
}
