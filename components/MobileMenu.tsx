//Next Components
import Link from "next/link";

//Components
import MenuItems from "./MenuItems";

//Helpers
import { THEME } from "../helpers/helpers.styles";

//Assets
import {
  HomeIcon,
  AllUsersIcon,
  SettingsIcon,
  MessageIcon,
} from "../icons/icons";

export default function MobileMenu() {
  return (
    <nav
      className={`box-row justify-center items-center fixed bottom-0 h-auto w-screen  z-20 bg-${THEME.tertiary} md:hidden`}
    >
      <ul
        className={`flex justify-around w-full border-t border-${THEME.primary}`}
      >
        <Link href="/home">
          <a
            className={`flex justify-center items-center py-4 my-1 text-${THEME.primary} font-semibold`}
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
            className={`flex justify-center items-center py-4 my-1 text-${THEME.primary} font-semibold`}
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
            className={`flex justify-center items-center py-4 my-1 text-${THEME.primary} font-semibold`}
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
            className={`flex justify-center items-center py-4 my-1 text-${THEME.primary} font-semibold `}
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
