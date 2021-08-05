//Next components
import Image from "next/image";

//React
import { useState } from "react";

//Helpers
import { basicGlobalStyles } from "../helpers/helpers.styles";

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
        className={`${basicGlobalStyles.flexColumnContainer} ${showUserDetails} justify-around text-center p-2 shadow-lg rounded-lg m-2 cursor-pointer relative transition-all group hover:bg-gray-100 md:flex md:flex-row md:justify-around md:text-left md:w-96`}
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
          className={`flex flex-col justify-around items-center md:flex md:justify-center md:items-start text-gray-500`}
        >
          <h3 className="text-lg text-blue-600 group-hover:text-gray-800">{`${name.first}, ${name.last}`}</h3>
          <p className="text-sm group-hover:text-gray-800">{login.username}</p>
          <p className="text-sm group-hover:text-gray-800">{`${dob.age} years old`}</p>
        </div>
      </div>
    </>
  );
}
