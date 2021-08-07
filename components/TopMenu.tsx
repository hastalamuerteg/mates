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
      className={`flex justify-end items-center ${GLOBAL_THEME.topMenuBackgroundColor} w-full  h-14 fixed z-50`}
    >
      {
        <ul className="flex space-x-8 mr-20 h-12 items-center">
          {
            <MenuItems>
              <Link href="/users/all-users">
                <a
                  className={`${GLOBAL_ICONOGRAPHY.topMenuLinks} transition-all hover:${GLOBAL_THEME.topMenuBackgroundIconsHover}`}
                >
                  {
                    <AllUsersIcon
                      className={GLOBAL_ICONOGRAPHY.menuIcons}
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
                  className={`${GLOBAL_ICONOGRAPHY.topMenuLinks} transition-all hover:${GLOBAL_THEME.topMenuBackgroundIconsHover}`}
                >
                  {
                    <MessageIcon
                      className={GLOBAL_ICONOGRAPHY.menuIcons}
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
                  className={`${GLOBAL_ICONOGRAPHY.topMenuLinks} transition-all hover:${GLOBAL_THEME.topMenuBackgroundIconsHover}`}
                >
                  {
                    <SettingsIcon
                      className={GLOBAL_ICONOGRAPHY.menuIcons}
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
                  className={`${GLOBAL_ICONOGRAPHY.topMenuLinks} transition-all hover:${GLOBAL_THEME.topMenuBackgroundIconsHover}`}
                >
                  {
                    <LogoutIcon
                      className={GLOBAL_ICONOGRAPHY.menuIcons}
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
