//Next Components
import Link from "next/link";
import Image from "next/image";

//React
import { useState } from "react";

//Components
import MenuItems from "../components/MenuItems";

//Helpers
import { ICONS_FONT, THEME } from "../helpers/helpers.styles";

//Authentication
import { useAuth0 } from "@auth0/auth0-react";

//Assets
import {
  AllUsersIcon,
  MessageIcon,
  SettingsIcon,
  LogoutIcon,
  MobileMenuIcon,
  CloseIcon,
  CloseXIcon,
} from "../icons/icons";
import logo from "../assets/logo.png";

export default function TopMenu() {
  const { logout } = useAuth0();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleToggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  function handleLogoutSession() {
    logout({ returnTo: window.location.origin });
  }

  return (
    <header
      className={`flex justify-around md:justify-end items-center bg-${THEME.primary} h-16 w-full fixed z-50`}
    >
      {/* Mobile menu*/}

      {isMenuOpen && (
        <div
          className={`box-col justify-start items-start bg-${THEME.primary} text-${THEME.text.primary} animate-fade_in_down p-2 m-2 h-52 w-full top-14 absolute z-50 md:hidden`}
        >
          <ul className={`w-full`}>
            <Link href="/users/all-users">
              <a className={`transition-all hover:bg-${THEME.secondary}`}>
                <li
                  className={`box-row items-center my-2 p-1 text-${THEME.text.secondary}`}
                >
                  <AllUsersIcon
                    className="mx-2"
                    style={{
                      color: `${THEME.variants.primary_icons}`,
                    }}
                  />
                  Friends
                </li>
              </a>
            </Link>
            <Link href="/users/all-users">
              <a className={` transition-all hover:bg-${THEME.secondary}`}>
                <li
                  className={`box-row items-center my-2 p-1 text-${THEME.text.secondary}`}
                >
                  <MessageIcon
                    className="mx-2"
                    style={{
                      color: `${THEME.variants.primary_icons}`,
                    }}
                  />
                  Message
                </li>
              </a>
            </Link>
            <Link href="/users/all-users">
              <a className={` transition-all hover:bg-${THEME.secondary}`}>
                <li
                  className={`box-row items-center my-2 p-1 text-${THEME.text.secondary}`}
                >
                  <SettingsIcon
                    className="mx-2"
                    style={{
                      color: `${THEME.variants.primary_icons}`,
                    }}
                  />
                  Settings
                </li>
              </a>
            </Link>
            <Link href="/users/all-users">
              <a className={` transition-all hover:bg-${THEME.secondary}`}>
                <li
                  className={`box-row items-center my-2 p-1 text-${THEME.text.secondary}`}
                >
                  <LogoutIcon
                    className="mx-2"
                    style={{
                      color: `${THEME.variants.primary_icons}`,
                    }}
                  />
                  Logout
                </li>
              </a>
            </Link>
          </ul>
        </div>
      )}

      <div
        className={`box-row justify-between items-center pt-1 px-2 mx-1 w-full md:hidden`}
      >
        <div>
          <Link href="/home">
            <a>
              <Image
                alt="mates logo"
                src={logo}
                height={45}
                width={45}
                className="rounded-full"
              />
            </a>
          </Link>
        </div>
        {isMenuOpen ? (
          <div>
            <CloseXIcon
              onClick={handleToggleMenu}
              className="menu-icons cursor-pointer animate-spin_button"
              style={{
                fontSize: `${ICONS_FONT.icons}`,
                color: `${THEME.variants.primary_icons}`,
              }}
            />
          </div>
        ) : (
          <div>
            <MobileMenuIcon
              onClick={handleToggleMenu}
              className="menu-icons cursor-pointer animate-spin_button"
              style={{
                fontSize: `${ICONS_FONT.icons}`,
                color: `${THEME.variants.primary_icons}`,
              }}
            />
          </div>
        )}
      </div>
      {
        <ul className="hidden md:flex space-x-8 md:mr-20 h-12 items-center">
          {
            <MenuItems>
              <Link href="/users/all-users">
                <a
                  className={`top-menu-links transition-all hover:bg-${THEME.secondary}`}
                >
                  {
                    <AllUsersIcon
                      className="menu-icons"
                      style={{
                        fontSize: `${ICONS_FONT.icons}`,
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
                  className={`top-menu-links transition-all hover:bg-${THEME.secondary}`}
                >
                  {
                    <MessageIcon
                      className="menu-icons"
                      style={{
                        fontSize: `${ICONS_FONT.icons}`,
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
                  className={`top-menu-links transition-all hover:bg-${THEME.secondary}`}
                >
                  {
                    <SettingsIcon
                      className="menu-icons"
                      style={{
                        fontSize: `${ICONS_FONT.icons}`,
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
                  className={`top-menu-links transition-all hover:bg-${THEME.secondary}`}
                >
                  {
                    <LogoutIcon
                      className="menu-icons"
                      onClick={handleLogoutSession}
                      style={{
                        fontSize: `${ICONS_FONT.icons}`,
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
