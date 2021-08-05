//Next Components
import Image from "next/image";

//Types
import { IUsers } from "../types/users";

//Helpers
import { basicGlobalStyles } from "../helpers/helpers.styles";

//Assets
import { CloseIcon, MessageIcon, PhoneIcon, EmailIcon } from "../icons/icons";

interface Props {
  user: IUsers;
  onUserCardClick: boolean;
  onUserCardClose: (args: boolean) => void;
}
export default function UserCardExpandDetails({
  onUserCardClick,
  onUserCardClose,
  user,
}: Props) {
  function handleCloseWindow() {
    onUserCardClose(false);
  }

  const userCardDetailsConfig = {
    closeIcon: "26px",
    iconsFontSize: "20px",
    userGender: user.gender === "female" ? "bg-pink-200" : "bg-blue-200",
  };

  const userCardDetailsJSX = (
    <div
      className={`${basicGlobalStyles.flexColumnContainer} justify-between text-center shadow-2xl bg-gray-100  h-4/6 w-3/6 rounded-md absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 transition-all`}
    >
      <div
        className={`${basicGlobalStyles.flexRowContainer} justify-end w-full`}
      >
        <span
          className="flex justify-center items-center rounded-md mt-4 mr-4 cursor-pointer"
          onClick={handleCloseWindow}
        >
          <CloseIcon
            style={{ fontSize: `${userCardDetailsConfig.closeIcon}` }}
          />
        </span>
      </div>

      <div
        className={`${basicGlobalStyles.flexRowContainer} justify-center space-x-6 w-full flex-grow`}
      >
        <picture
          className={`mx-6 p-2 rounded-lg w-auto ${userCardDetailsConfig.userGender} shadow-lg`}
        >
          <Image
            alt={`${user.name.first}, ${user.name.last}`}
            src={user.picture.large}
            width={250}
            height={250}
            className="rounded-lg "
          />
        </picture>
        <div
          className={`flex flex-col justify-start items-start md:flex md:justify-start md:items-start text-gray-500 flex-grow`}
        >
          <h3 className="text-2xl text-blue-600 font-semibold">{`${user.name.first}, ${user.name.last}`}</h3>
          <ul className="flex flex-col items-start text-md text-gray-700">
            <li>{user.login.username}</li>
            <li>{`${user.dob.age} years old`}</li>
            <li>{`${user.location.city}, ${user.location.state}`}</li>
            <li>{user.location.country}</li>
            <ul className="flex items-start text-lg space-x-4 text-gray-700">
              <li className="cursor-pointer">
                <MessageIcon
                  style={{ fontSize: `${userCardDetailsConfig.iconsFontSize}` }}
                />
              </li>
              <li className="cursor-pointer">
                <PhoneIcon
                  style={{ fontSize: `${userCardDetailsConfig.iconsFontSize}` }}
                />
              </li>
              <li className="cursor-pointer">
                <EmailIcon
                  style={{ fontSize: `${userCardDetailsConfig.iconsFontSize}` }}
                />
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </div>
  );

  {
    if (onUserCardClick) return <>{userCardDetailsJSX}</>;
  }

  return <span></span>;
}
