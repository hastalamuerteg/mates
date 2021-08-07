//Next Components
import Image from "next/image";

//Types
import { IUsers } from "../types/users";

//Helpers
import {
  GLOBAL_CONTAINERS,
  GLOBAL_ICONOGRAPHY,
  GLOBAL_THEME,
  GLOBAL_TYPOGRAPHY,
} from "../helpers/helpers.styles";

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

  const userGender =
    user.gender === "female"
      ? `${GLOBAL_THEME.userCardExpandDetailsAvatarWoman}`
      : `${GLOBAL_THEME.userCardExpandDetailsAvatarMan}`;

  const userCardDetailsJSX = (
    <div
      className={`${GLOBAL_CONTAINERS.flexColumnContainer} justify-between text-center shadow-2xl ${GLOBAL_THEME.userCardExpandDetailsBackgroundColor}  h-auto w-4/6 rounded-md absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 transition-all`}
    >
      <div
        className={`${GLOBAL_CONTAINERS.flexRowContainer} justify-end w-full`}
      >
        <span
          className="flex justify-center items-center rounded-md mt-4 mr-4 cursor-pointer"
          onClick={handleCloseWindow}
        >
          <CloseIcon
            style={{
              fontSize: `${GLOBAL_ICONOGRAPHY.userCardExpandDetailsCloseIcon}`,
            }}
          />
        </span>
      </div>

      <div
        className={`${GLOBAL_CONTAINERS.flexRowContainer} justify-center space-x-6 w-full flex-grow`}
      >
        <picture
          className={`mx-6 mb-6 p-2 rounded-lg w-auto ${userGender} shadow-lg`}
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
          className={`flex flex-col justify-start items-start w-1/2 md:flex md:justify-start md:items-start flex-grow`}
        >
          <h3
            className={`text-2xl ${GLOBAL_TYPOGRAPHY.mainFontsColor} font-semibold`}
          >{`${user.name.first}, ${user.name.last}`}</h3>
          <ul
            className={`flex flex-col items-start text-md ${GLOBAL_TYPOGRAPHY.userCardFontColor}`}
          >
            <li>{user.login.username}</li>
            <li>{`${user.dob.age} years old`}</li>
            <li>{`${user.location.city}, ${user.location.state}`}</li>
            <li>{user.location.country}</li>
            <ul
              className={`flex items-start text-lg space-x-4 ${GLOBAL_TYPOGRAPHY.userCardFontColor}`}
            >
              <li className="cursor-pointer">
                <MessageIcon
                  className={GLOBAL_ICONOGRAPHY.menuIcons}
                  style={{
                    fontSize: `${GLOBAL_ICONOGRAPHY.userCardExpandDetailsIcons}`,
                    color: `${GLOBAL_THEME.userCardExpandDetailsIcons}`,
                  }}
                />
              </li>
              <li className="cursor-pointer">
                <PhoneIcon
                  className={GLOBAL_ICONOGRAPHY.menuIcons}
                  style={{
                    fontSize: `${GLOBAL_ICONOGRAPHY.userCardExpandDetailsIcons}`,
                    color: `${GLOBAL_THEME.userCardExpandDetailsIcons}`,
                  }}
                />
              </li>
              <li className="cursor-pointer">
                <EmailIcon
                  className={GLOBAL_ICONOGRAPHY.menuIcons}
                  style={{
                    fontSize: `${GLOBAL_ICONOGRAPHY.userCardExpandDetailsIcons}`,
                    color: `${GLOBAL_THEME.userCardExpandDetailsIcons}`,
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
