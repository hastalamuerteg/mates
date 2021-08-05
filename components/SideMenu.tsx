//Next Components
import Link from "next/link";
import Image from "next/image";

//Components
import MenuItems from "./MenuItems";

//Helpers
import { basicGlobalStyles } from "../helpers/helpers.styles";

//Assets
import {
  HomeIcon,
  NewUserIcon,
  AllUsersIcon,
  SettingsIcon,
} from "../icons/icons";
import logo from "../assets/logo.png";

const { iconsSize, sideMenuLinks, sideMenuIcons } = basicGlobalStyles;

export default function SideMenu() {
  return (
    <nav className="flex flex-col justify-center items-center h-screen w-28 z-20 bg-gradient-to-t from-blue-700 via-blue-500 to-blue-500 ">
      <div>
        <Link href="/home">
          <a>
            <Image
              className="rounded-full"
              alt="mates logo"
              src={logo}
              height={100}
              width={100}
            />
          </a>
        </Link>
      </div>

      <ul
        className={`${basicGlobalStyles.flexColumnContainer} justify-center my-auto  w-full`}
      >
        <Link href="/home">
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

        <Link href="/actions/settings">
          <a className={`${sideMenuLinks}`}>
            {
              <MenuItems>
                <SettingsIcon
                  style={{ fontSize: `${iconsSize}` }}
                  className={`${sideMenuIcons}`}
                />
              </MenuItems>
            }
            Settings
          </a>
        </Link>
      </ul>
    </nav>
  );
}
