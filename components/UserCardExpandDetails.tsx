//Next Components
import Image from "next/image";

//Types
import { IUsers } from "../types/users";

//Helpers
import { ICONS_FONT, THEME } from "../helpers/helpers.styles";

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

  const userCardDetailsJSX = (
    <div
      className={`box-col justify-between text-center shadow-2xl bg-${THEME.tertiary} animate-fade h-auto w-4/5 sm:w-4/6 lg:w-2/6 rounded-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 transition-all`}
    >
      <div className={`box-row justify-end w-full`}>
        <span
          className={`flex justify-center items-center rounded-md mt-4 mr-4 cursor-pointer text-${THEME.primary}`}
          onClick={handleCloseWindow}
        >
          <CloseIcon
            style={{
              fontSize: `${ICONS_FONT.closeIcon}`,
            }}
          />
        </span>
      </div>

      <div
        className={`box-col justify-center items-center text-left mt-4 md:justify-center w-full flex-grow md:flex md:flex-row md:items-start`}
      >
        <picture
          className={`mx-6 mb-6 p-2 rounded-lg w-auto bg-${THEME.primary} shadow-lg`}
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
          className={`flex flex-col justify-center items-center w-full m-2 md:flex md:justify-start md:items-start`}
        >
          <h3
            className={`text-2xl text-${THEME.primary} font-semibold`}
          >{`${user.name.first}, ${user.name.last}`}</h3>
          <ul
            className={`flex flex-col items-center md:items-start w-full text-md text-${THEME.primary}`}
          >
            <li className={`text-${THEME.text.primary}`}>
              {user.login.username}
            </li>
            <li
              className={`text-${THEME.text.primary}`}
            >{`${user.dob.age} years old`}</li>
            <li
              className={`text-${THEME.text.primary}`}
            >{`${user.location.city}, ${user.location.state}`}</li>
            <li className={`text-${THEME.text.primary}`}>
              {user.location.country}
            </li>
            <ul
              className={`flex justify-around border-t border-${THEME.primary} md:border-0 my-2 md:m-0 md:justify-start text-lg w-full`}
            >
              <li className="flex items-center cursor-pointer mt-4 md:mt-1 md:mr-3">
                <MessageIcon
                  className="menu-icons"
                  style={{
                    fontSize: `${ICONS_FONT.userCardIcons}`,
                  }}
                />
              </li>
              <li className="flex items-center cursor-pointer mt-4 md:mt-1 md:mr-3">
                <PhoneIcon
                  className="menu-icons"
                  style={{
                    fontSize: `${ICONS_FONT.userCardIcons}`,
                  }}
                />
              </li>
              <li className="flex items-center cursor-pointer mt-4 md:mt-1 md:mr-3">
                <EmailIcon
                  className="menu-icons"
                  style={{
                    fontSize: `${ICONS_FONT.userCardIcons}`,
                  }}
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
