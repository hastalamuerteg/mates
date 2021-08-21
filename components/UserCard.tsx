//Next components
import Image from "next/image";

//React
import { useState } from "react";

//Types
import { IUsers } from "../types/users";

//Components
import UserCardExpandDetails from "./UserCardExpandDetails";

//Context
import { useThemeContext } from "../Contexts/ThemeProvider";

interface Props {
  children: IUsers;
}

export default function UserCard({ children: user }: Props) {
  const { darkmode } = useThemeContext();
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
        className={`box-col ${showUserDetails} justify-around text-center w-40 h-52 p-2 shadow-2xl rounded-xl m-1 cursor-pointer relative ${
          darkmode ? "bg-dark-tertiary" : "bg-light-tertiary"
        } transition-all group hover:bg-light-primary md:flex md:flex-row md:justify-around md:text-left md:w-96 md:h-auto`}
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
            className={`text-lg font-semibold text-light-primary
            } transition-all group-hover:${
              darkmode ? "text-dark-tertiary" : "text-light-text-primary"
            }`}
          >{`${name.first}, ${name.last}`}</h3>
          <p
            className={`text-sm ${
              darkmode ? "text-dark-text-primary" : "text-light-text-secondary"
            } group-hover:${
              darkmode ? "text-dark-tertiary" : "text-light-tertiary"
            }`}
          >
            {login.username}
          </p>
          <p
            className={`text-sm ${
              darkmode ? "text-dark-text-primary" : "text-light-text-secondary"
            } group-hover:${
              darkmode ? "text-dark-tertiary" : "text-light-tertiary"
            }`}
          >{`${dob.age} years old`}</p>
        </div>
      </div>
    </>
  );
}
