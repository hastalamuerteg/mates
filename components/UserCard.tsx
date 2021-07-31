import { basicGlobalStyles } from "../helpers/helpers.styles";
import { IUsers } from "../types/users";
import Image from "next/image";
import { useState } from "react";

interface ISelectedUser {
  user: IUsers;
  prevState: null;
}

export default function UserCard({ user }: { user: IUsers }) {
  const [selectedUser, setSelectedUser] = useState<ISelectedUser | null>(null);

  function handleUserCardClick() {
    console.log(user);

    // onUserCardClick(selectedUser);
    // setSelectedUser(user);
  }
  return (
    <div
      onClick={handleUserCardClick}
      className={`${basicGlobalStyles.flexColumnContainer} justify-around text-center p-2 shadow-lg rounded-md m-2 cursor-pointer transition-all group hover:bg-gray-100 md:flex md:flex-row md:justify-around md:text-left md:w-96`}
    >
      <picture>
        <Image
          alt={`${user.name.first}, ${user.name.last}`}
          src={user.picture.medium}
          width={75}
          height={75}
          className="rounded-full"
        />
      </picture>
      <div
        className={`flex flex-col justify-around items-center md:flex md:justify-center md:items-start text-gray-500`}
      >
        <h3 className="text-lg text-blue-600 group-hover:text-gray-800">{`${user.name.first}, ${user.name.last}`}</h3>
        <p className="text-sm group-hover:text-gray-800">
          {user.login.username}
        </p>
        <p className="text-sm group-hover:text-gray-800">{`${user.dob.age} years old`}</p>
      </div>
    </div>
  );
}
