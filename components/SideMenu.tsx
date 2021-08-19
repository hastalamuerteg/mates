//Next Components
import Link from "next/link";
import Image from "next/image";

//Components
import MenuItems from "./MenuItems";
import SwitchButton from "./SwitchButton";

//Helpers
import { ICONS_FONT } from "../helpers/helpers.styles";

//Assets
import {
  HomeIcon,
  AllUsersIcon,
  SettingsIcon,
  MessageIcon,
} from "../icons/icons";
import logo from "../assets/logo.png";

//Context
import { ThemeContext } from "../Contexts/ThemeProvider";
import { useContext } from "react";

export default function SideMenu() {
  const { background, secondaryColor, tertiaryColor, textPrimary } =
    useContext(ThemeContext);

  return (
    <nav
      className={`hidden md:flex md:flex-col md:justify-center md:items-center h-screen w-auto z-20 bg-${tertiaryColor} md:w-auto`}
    >
      <div>
        <Link href="/home">
          <a>
            <Image alt="mates logo" src={logo} height={67} width={67} />
          </a>
        </Link>
      </div>

      <ul className={`box-col justify-center my-auto  w-full`}>
        <Link href="/home">
          <a
            className={`text-${textPrimary} transition-all hover:text-${tertiaryColor} hover:bg-${secondaryColor} side-menu-links `}
          >
            {
              <MenuItems>
                <HomeIcon
                  className={`menu-icons `}
                  style={{ fontSize: `${ICONS_FONT.icons}` }}
                />
              </MenuItems>
            }
          </a>
        </Link>
        <Link href="/inbox/messages">
          <a
            className={`text-${textPrimary} transition-all hover:text-${tertiaryColor} hover:bg-${secondaryColor} side-menu-links `}
          >
            {
              <MenuItems>
                <MessageIcon
                  className={`menu-icons`}
                  style={{ fontSize: `${ICONS_FONT.icons}` }}
                />
              </MenuItems>
            }
          </a>
        </Link>

        <Link href="/users/all-users">
          <a
            className={`text-${textPrimary} transition-all hover:text-${tertiaryColor} hover:bg-${secondaryColor} side-menu-links`}
          >
            {
              <MenuItems>
                <AllUsersIcon
                  className={`menu-icons`}
                  style={{ fontSize: `${ICONS_FONT.icons}` }}
                />
              </MenuItems>
            }
          </a>
        </Link>

        <Link href="/actions/settings">
          <a
            className={`text-${textPrimary} transition-all hover:text-${tertiaryColor} hover:bg-${secondaryColor} side-menu-links`}
          >
            {
              <MenuItems>
                <SettingsIcon
                  className={`menu-icons`}
                  style={{ fontSize: `${ICONS_FONT.icons}` }}
                />
              </MenuItems>
            }
          </a>
        </Link>
        <div>
          <SwitchButton />
        </div>
      </ul>
    </nav>
  );
}
