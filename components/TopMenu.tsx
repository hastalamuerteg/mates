//Next Components
import Link from "next/link";

//Components
import MenuItems from "../components/MenuItems";

//Helpers
import { GLOBAL_ICONOGRAPHY, THEME } from "../helpers/helpers.styles";

//Authentication
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
      className={`flex justify-around md:justify-end items-center bg-${THEME.primary} w-full h-14 fixed z-50`}
    >
      {
        <ul className="flex space-x-8 md:mr-20 h-12 items-center">
          {
            <MenuItems>
              <Link href="/users/all-users">
                <a
                  className={`${GLOBAL_ICONOGRAPHY.topMenuLinks} transition-all hover:bg-${THEME.secondary}`}
                >
                  {
                    <AllUsersIcon
                      className={GLOBAL_ICONOGRAPHY.menuIcons}
                      style={{
                        fontSize: `${GLOBAL_ICONOGRAPHY.iconsSize}`,
                        color: `${THEME.variants.primary_icons}`,
                      }}
                    />
                  }
                </a>
              </Link>
            </MenuItems>
          }
          {
            <MenuItems>
              <Link href="">
                <a
                  className={`${GLOBAL_ICONOGRAPHY.topMenuLinks} transition-all hover:bg-${THEME.secondary}`}
                >
                  {
                    <MessageIcon
                      className={GLOBAL_ICONOGRAPHY.menuIcons}
                      style={{
                        fontSize: `${GLOBAL_ICONOGRAPHY.iconsSize}`,
                        color: `${THEME.variants.primary_icons}`,
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
                  className={`${GLOBAL_ICONOGRAPHY.topMenuLinks} transition-all hover:bg-${THEME.secondary}`}
                >
                  {
                    <SettingsIcon
                      className={GLOBAL_ICONOGRAPHY.menuIcons}
                      style={{
                        fontSize: `${GLOBAL_ICONOGRAPHY.iconsSize}`,
                        color: `${THEME.variants.primary_icons}`,
                      }}
                    />
                  }
                </a>
              </Link>
            </MenuItems>
          }
          {
            <MenuItems>
              {/* to fix auth provider logout*/}
              <Link href="">
                <a
                  className={`${GLOBAL_ICONOGRAPHY.topMenuLinks} transition-all hover:bg-${THEME.secondary}`}
                >
                  {
                    <LogoutIcon
                      className={GLOBAL_ICONOGRAPHY.menuIcons}
                      onClick={handleLogoutSession}
                      style={{
                        fontSize: `${GLOBAL_ICONOGRAPHY.iconsSize}`,
                        color: `${THEME.variants.primary_icons}`,
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
