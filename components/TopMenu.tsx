//Next Components
import Link from "next/link";

//Components
import MenuItems from "../components/MenuItems";

//Helpers
import { GLOBAL_ICONOGRAPHY, GLOBAL_THEME } from "../helpers/helpers.styles";
import { useAuth0 } from "@auth0/auth0-react";

//Assets
import {
  AllUsersIcon,
  MessageIcon,
  SettingsIcon,
  LogoutIcon,
} from "../icons/icons";

export default function TopMenu() {
  const { logout } = useAuth0();
  function handleLogoutSession() {
    logout({ returnTo: window.location.origin });
  }

  return (
    <header
      className={`flex justify-end items-center py-4 w-full ${GLOBAL_THEME.topMenuBackgroundColor} shadow-sm  h-12 fixed z-10`}
    >
      {
        <ul className="flex justify-end space-x-16 mr-10 w-full h-12 items-center">
          {
            <MenuItems>
              <Link href="/users/all-users">
                <a
                  className={`${GLOBAL_ICONOGRAPHY.topMenuLinks} transition-all hover:${GLOBAL_ICONOGRAPHY.topMenuBackgroundIconsHover}`}
                >
                  {
                    <AllUsersIcon
                      style={{
                        fontSize: `${GLOBAL_ICONOGRAPHY.iconsSize}`,
                        color: `${GLOBAL_THEME.topMenuLinksColor}`,
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
                <a
                  className={`${GLOBAL_ICONOGRAPHY.topMenuLinks} transition-all hover:${GLOBAL_ICONOGRAPHY.topMenuBackgroundIconsHover}`}
                >
                  {
                    <MessageIcon
                      style={{
                        fontSize: `${GLOBAL_ICONOGRAPHY.iconsSize}`,
                        color: `${GLOBAL_THEME.topMenuLinksColor}`,
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
                <a
                  className={`${GLOBAL_ICONOGRAPHY.topMenuLinks} transition-all hover:${GLOBAL_ICONOGRAPHY.topMenuBackgroundIconsHover}`}
                >
                  {
                    <SettingsIcon
                      style={{
                        fontSize: `${GLOBAL_ICONOGRAPHY.iconsSize}`,
                        color: `${GLOBAL_THEME.topMenuLinksColor}`,
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
                <a
                  className={`${GLOBAL_ICONOGRAPHY.topMenuLinks} transition-all hover:${GLOBAL_ICONOGRAPHY.topMenuBackgroundIconsHover}`}
                >
                  {
                    <LogoutIcon
                      onClick={handleLogoutSession}
                      style={{
                        fontSize: `${GLOBAL_ICONOGRAPHY.iconsSize}`,
                        color: `${GLOBAL_THEME.topMenuLinksColor}`,
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
