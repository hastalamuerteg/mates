//Next Components
import Link from "next/link";
import Image from "next/image";

//Components
import MenuItems from "./MenuItems";

//Helpers
import {
  GLOBAL_ICONOGRAPHY,
  GLOBAL_CONTAINERS,
  THEME,
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
      className={`hidden md:flex md:flex-col md:justify-center md:items-center h-screen w-auto z-20 bg-${THEME.white} md:w-20`}
    >
      <div className="mt-2">
        <Link href="/home">
          <a>
            <Image
              className="rounded-lg "
              alt="mates logo"
              src={logo}
              height={85}
              width={85}
            />
          </a>
        </Link>
      </div>

      <ul
        className={`${GLOBAL_CONTAINERS.flexColumnContainer} justify-center my-auto  w-full`}
      >
        <Link href="/home">
          <a
            className={`text-${THEME.primary} transition-all hover:text-${THEME.white} hover:bg-${THEME.secondary} ${GLOBAL_ICONOGRAPHY.sideMenuLinks} `}
          >
            {
              <MenuItems>
                <HomeIcon
                  className={`${GLOBAL_ICONOGRAPHY.menuIcons} `}
                  style={{ fontSize: `${GLOBAL_ICONOGRAPHY.iconsSize}` }}
                />
              </MenuItems>
            }
          </a>
        </Link>
        <Link href="/users/new-user">
          <a
            className={`text-${THEME.primary} transition-all hover:text-${THEME.white} hover:bg-${THEME.secondary} ${GLOBAL_ICONOGRAPHY.sideMenuLinks} `}
          >
            {
              <MenuItems>
                <NewUserIcon
                  className={`${GLOBAL_ICONOGRAPHY.menuIcons}`}
                  style={{ fontSize: `${GLOBAL_ICONOGRAPHY.iconsSize}` }}
                />
              </MenuItems>
            }
          </a>
        </Link>

        <Link href="/users/all-users">
          <a
            className={`text-${THEME.primary} transition-all hover:text-${THEME.white} hover:bg-${THEME.secondary} ${GLOBAL_ICONOGRAPHY.sideMenuLinks}`}
          >
            {
              <MenuItems>
                <AllUsersIcon
                  className={`${GLOBAL_ICONOGRAPHY.menuIcons}`}
                  style={{ fontSize: `${GLOBAL_ICONOGRAPHY.iconsSize}` }}
                />
              </MenuItems>
            }
          </a>
        </Link>

        <Link href="/actions/settings">
          <a
            className={`text-${THEME.primary} transition-all hover:text-${THEME.white} hover:bg-${THEME.secondary} ${GLOBAL_ICONOGRAPHY.sideMenuLinks}`}
          >
            {
              <MenuItems>
                <SettingsIcon
                  className={`${GLOBAL_ICONOGRAPHY.menuIcons}`}
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
