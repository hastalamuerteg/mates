//Next Components
import Link from "next/link";

//Components
import MenuItems from "./MenuItems";

//Assets
import {
  HomeIcon,
  AllUsersIcon,
  SettingsIcon,
  MessageIcon,
} from "../icons/icons";

//Context
import { useThemeContext } from "../Contexts/ThemeProvider";

export default function MobileMenu() {
  const { primaryColor, tertiaryColor } = useThemeContext();
  return (
    <nav
      className={`box-row justify-center items-center fixed bottom-0 h-auto w-screen  z-20 bg-${tertiaryColor} md:hidden`}
    >
      <ul
        className={`flex justify-around w-full border-t border-${primaryColor}`}
      >
        <Link href="/home">
          <a
            className={`flex justify-center items-center py-4 my-1 text-${primaryColor} font-semibold`}
          >
            {
              <MenuItems>
                <HomeIcon style={{ fontSize: "24px" }} />
              </MenuItems>
            }
          </a>
        </Link>
        <Link href="/inbox/messages">
          <a
            className={`flex justify-center items-center py-4 my-1 text-${primaryColor} font-semibold`}
          >
            {
              <MenuItems>
                <MessageIcon style={{ fontSize: "24px" }} />
              </MenuItems>
            }
          </a>
        </Link>

        <Link href="/users/all-users">
          <a
            className={`flex justify-center items-center py-4 my-1 text-${primaryColor} font-semibold`}
          >
            {
              <MenuItems>
                <AllUsersIcon style={{ fontSize: "24px" }} />
              </MenuItems>
            }
          </a>
        </Link>

        <Link href="/actions/settings">
          <a
            className={`flex justify-center items-center py-4 my-1 text-${primaryColor} font-semibold `}
          >
            {
              <MenuItems>
                <SettingsIcon style={{ fontSize: "24px" }} />
              </MenuItems>
            }
          </a>
        </Link>
      </ul>
    </nav>
  );
}
