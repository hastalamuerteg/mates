//Next Components
import Link from "next/link";

//Components
import MenuItems from "./MenuItems";

//Helpers
import { basicGlobalStyles } from "../helpers/helpers.styles";

//Assets
import {
  HomeIcon,
  NewUserIcon,
  AllUsersIcon,
  ChangePassword,
} from "../icons/icons";

const { iconsSize, sideMenuLinks, sideMenuIcons } = basicGlobalStyles;

export default function SideMenu() {
  return (
    <nav className="flex justify-center items-center h-screen w-28 z-20 bg-gradient-to-t from-blue-700 via-blue-500 to-blue-500 ">
      <ul
        className={`${basicGlobalStyles.flexColumnContainer} justify-center my-auto  w-full`}
      >
        <Link href="/">
          <a className={`${sideMenuLinks}`}>
            {
              <MenuItems>
                <HomeIcon
                  style={{ fontSize: `${iconsSize}` }}
                  className={`${sideMenuIcons}`}
                />
              </MenuItems>
            }
            Home
          </a>
        </Link>
        <Link href="/users/new-user">
          <a className={`${sideMenuLinks}`}>
            {
              <MenuItems>
                <NewUserIcon
                  style={{ fontSize: `${iconsSize}` }}
                  className={`${sideMenuIcons}`}
                />
              </MenuItems>
            }
            New
          </a>
        </Link>

        <Link href="/users/all-users">
          <a className={`${sideMenuLinks}`}>
            {
              <MenuItems>
                <AllUsersIcon
                  style={{ fontSize: `${iconsSize}` }}
                  className={`${sideMenuIcons}`}
                />
              </MenuItems>
            }
            Friends
          </a>
        </Link>

        <Link href="/actions/change-password">
          <a className={`${sideMenuLinks}`}>
            {
              <MenuItems>
                <ChangePassword
                  style={{ fontSize: `${iconsSize}` }}
                  className={`${sideMenuIcons}`}
                />
              </MenuItems>
            }
            Security
          </a>
        </Link>
      </ul>
    </nav>
  );
}
