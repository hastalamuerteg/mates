//Next Components
import Link from "next/link";

//Components
import MenuItems from "../components/MenuItems";

//Assets
import {
  AllUsersIcon,
  MessageIcon,
  SettingsIcon,
  LogoutIcon,
} from "../icons/icons";

//Helpers
import { basicGlobalStyles } from "../helpers/helpers.styles";

const topMenuHoverLink =
  "flex justify-center items-center p-4 transition-all hover:bg-gray-100 h-full";

export default function TopMenu() {
  return (
    <header className="flex justify-end items-center py-4 w-full bg-white shadow-sm border h-12 fixed z-10">
      {
        <ul className="flex justify-between m-2 w-96 h-12 items-center">
          {
            <MenuItems>
              <Link href="/">
                <a className={topMenuHoverLink}>
                  {
                    <AllUsersIcon
                      style={{
                        fontSize: `${basicGlobalStyles.iconsSize}`,
                      }}
                    />
                  }
                </a>
              </Link>
            </MenuItems>
          }
          {
            <MenuItems>
              <Link href="/">
                <a className={topMenuHoverLink}>
                  {
                    <MessageIcon
                      style={{
                        fontSize: `${basicGlobalStyles.iconsSize}`,
                      }}
                    />
                  }
                </a>
              </Link>
            </MenuItems>
          }

          {
            <MenuItems>
              <Link href="/">
                <a className={topMenuHoverLink}>
                  {
                    <SettingsIcon
                      style={{
                        fontSize: `${basicGlobalStyles.iconsSize}`,
                      }}
                    />
                  }
                </a>
              </Link>
            </MenuItems>
          }
          {
            <MenuItems>
              <Link href="/">
                <a className={topMenuHoverLink}>
                  {
                    <LogoutIcon
                      style={{
                        fontSize: `${basicGlobalStyles.iconsSize}`,
                      }}
                    />
                  }
                </a>
              </Link>
            </MenuItems>
          }
        </ul>
      }
    </header>
  );
}
