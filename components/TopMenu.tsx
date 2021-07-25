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

export default function TopMenu() {
  return (
    <header className="flex justify-center items-center py-2 w-full bg-white border h-10 fixed z-20">
      {
        <ul className="flex justify-around m-2 w-96 h-auto items-center">
          {
            <MenuItems>
              <Link href="/">
                <a>
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
                <a>
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
                <a>
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
                <a>
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
