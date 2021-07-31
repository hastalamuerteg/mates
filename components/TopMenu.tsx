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
import { useAuth0 } from "@auth0/auth0-react";

const topMenuHoverLink =
  "flex justify-center items-center px-4 py-2 h-12 transition-all hover:bg-gray-100 ";

export default function TopMenu() {
  const { logout } = useAuth0();
  function handleLogoutSession() {
    logout({ returnTo: window.location.origin });
  }

  return (
    <header className="flex justify-end items-center py-4 w-full bg-white shadow-sm border h-12 fixed z-10">
      {
        <ul className="flex justify-end space-x-16 mr-10 w-full h-12 items-center">
          {
            <MenuItems>
              <Link href="/users/all-users">
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
              <Link href="/actions/settings">
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
                      onClick={handleLogoutSession}
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
