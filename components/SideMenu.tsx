//Next Components
import Link from "next/link";
import Image from "next/image";

//Components
import MenuItems from "./MenuItems";

//Helpers
import {
  GLOBAL_ICONOGRAPHY,
  GLOBAL_CONTAINERS,
  GLOBAL_THEME,
} from "../helpers/helpers.styles";

//Assets
import {
  HomeIcon,
  NewUserIcon,
  AllUsersIcon,
  SettingsIcon,
} from "../icons/icons";
import logo from "../assets/logo.png";

export default function SideMenu() {
  return (
    <nav
      className={`flex flex-col justify-center items-center h-screen w-auto z-20 ${GLOBAL_THEME.sideMenuBackgroundColor} md:w-20`}
    >
      <div className="mt-2">
        <Link href="/home">
          <a>
            <Image
              className="rounded-lg "
              alt="mates logo"
              src={logo}
              height={70}
              width={70}
            />
          </a>
        </Link>
      </div>

      <ul
        className={`${GLOBAL_CONTAINERS.flexColumnContainer} justify-center my-auto  w-full`}
      >
        <Link href="/home">
          <a
            className={`${GLOBAL_THEME.sideMenuLinksColor} transition-all hover:${GLOBAL_THEME.sideMenuLinksColorHover} hover:${GLOBAL_THEME.sideMenuLinksBackgroundColorHover} ${GLOBAL_ICONOGRAPHY.sideMenuLinks}`}
          >
            {
              <MenuItems>
                <HomeIcon
                  style={{ fontSize: `${GLOBAL_ICONOGRAPHY.iconsSize}` }}
                />
              </MenuItems>
            }
          </a>
        </Link>
        <Link href="/users/new-user">
          <a
            className={`${GLOBAL_THEME.sideMenuLinksColor} transition-all hover:${GLOBAL_THEME.sideMenuLinksColorHover} hover:${GLOBAL_THEME.sideMenuLinksBackgroundColorHover} ${GLOBAL_ICONOGRAPHY.sideMenuLinks} `}
          >
            {
              <MenuItems>
                <NewUserIcon
                  style={{ fontSize: `${GLOBAL_ICONOGRAPHY.iconsSize}` }}
                />
              </MenuItems>
            }
          </a>
        </Link>

        <Link href="/users/all-users">
          <a
            className={`${GLOBAL_THEME.sideMenuLinksColor} transition-all hover:${GLOBAL_THEME.sideMenuLinksColorHover} hover:${GLOBAL_THEME.sideMenuLinksBackgroundColorHover} ${GLOBAL_ICONOGRAPHY.sideMenuLinks}`}
          >
            {
              <MenuItems>
                <AllUsersIcon
                  style={{ fontSize: `${GLOBAL_ICONOGRAPHY.iconsSize}` }}
                />
              </MenuItems>
            }
          </a>
        </Link>

        <Link href="/actions/settings">
          <a
            className={`${GLOBAL_THEME.sideMenuLinksColor} transition-all hover:${GLOBAL_THEME.sideMenuLinksColorHover} hover:${GLOBAL_THEME.sideMenuLinksBackgroundColorHover} ${GLOBAL_ICONOGRAPHY.sideMenuLinks}`}
          >
            {
              <MenuItems>
                <SettingsIcon
                  style={{ fontSize: `${GLOBAL_ICONOGRAPHY.iconsSize}` }}
                />
              </MenuItems>
            }
          </a>
        </Link>
      </ul>
    </nav>
  );
}
