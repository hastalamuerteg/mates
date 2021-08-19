//Next components
import Image from "next/image";

//React
import { useContext, useState } from "react";

//Types
import { IUsers } from "../types/users";

//Components
import UserCardExpandDetails from "./UserCardExpandDetails";

//Context
import { ThemeContext } from "../Contexts/ThemeProvider";

interface Props {
  children: IUsers;
}

export default function UserCard({ children: user }: Props) {
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
        className={`box-col ${showUserDetails} justify-around text-center w-40 h-52 p-2 shadow-2xl rounded-xl m-1 cursor-pointer relative bg-${tertiaryColor} transition-all group hover:bg-${primaryColor} md:flex md:flex-row md:justify-around md:text-left md:w-96 md:h-auto`}
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
          className={`box-col justify-around items-center md:flex md:justify-center md:items-start`}
        >
          <h3
            className={`text-lg font-semibold text-${primaryColor} transition-all group-hover:text-${tertiaryColor}`}
          >{`${name.first}, ${name.last}`}</h3>
          <p className={`text-sm group-hover:text-${tertiaryColor}`}>
            {login.username}
          </p>
          <p
            className={`text-sm group-hover:text-${tertiaryColor}`}
          >{`${dob.age} years old`}</p>
        </div>
      </div>
    </>
  );
}
