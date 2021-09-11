//Next Components
import Link from "next/link";
import Image from "next/image";

//React
import { useState } from "react";

//Components
import MenuItems from "../components/MenuItems";

//Helpers
import { colors_variants, ICONS_FONT } from "../helpers/helpers.styles";

//Context
import { useThemeContext } from "../Contexts/ThemeProvider";

//Assets
import {
  AllUsersIcon,
  MessageIcon,
  SettingsIcon,
  LogoutIcon,
  MobileMenuIcon,
  CloseXIcon,
  ChangeTheme,
} from "../icons/icons";
import logo from "../assets/logo.png";

export default function TopMenu() {
  const { toggleTheme, darkmode } = useThemeContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleToggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  function handleMenuItemClick() {
    setIsMenuOpen(false);
  }

  function handleDarkmode() {
    toggleTheme();
    handleMenuItemClick();
  }

  return (
    <header
      className={`flex justify-around md:justify-end items-center bg-gradient-to-r from-light-primary via-light-secondary to-light-secondary h-16 w-full fixed z-50`}
    >
      {/* Mobile menu*/}

      {isMenuOpen && (
        <div
          className={`box-col justify-start items-start bg-gradient-to-r from-light-primary via-light-secondary to-light-secondary text-light-text-primary animate-fade_in_down rounded-b-xl p-2 h-60 w-full top-14 absolute z-50 md:hidden`}
        >
          <ul className={`w-full`}>
            <Link href="/users/all-users">
              <a
                className={`transition-all hover:bg-light-secondary`}
                onClick={handleMenuItemClick}
              >
                <li className={`box-row items-center my-2 p-1 `}>
                  <AllUsersIcon
                    className="mx-2"
                    style={{
                      color: `${colors_variants.icons}`,
                    }}
                  />
                  Friends
                </li>
              </a>
            </Link>
            <Link href="/inbox/messages">
              <a
                className={` transition-all hover:bg-light-secondary`}
                onClick={handleMenuItemClick}
              >
                <li className={`box-row items-center my-2 p-1 `}>
                  <MessageIcon
                    className="mx-2"
                    style={{
                      color: `${colors_variants.icons}`,
                    }}
                  />
                  Message
                </li>
              </a>
            </Link>
            <Link href="/actions/settings">
              <a
                className={` transition-all hover:bg-light-secondary`}
                onClick={handleMenuItemClick}
              >
                <li className={`box-row items-center my-2 p-1 `}>
                  <SettingsIcon
                    className="mx-2"
                    style={{
                      color: `${colors_variants.icons}`,
                    }}
                  />
                  Settings
                </li>
              </a>
            </Link>
            <Link href="">
              <a
                className={`transition-all hover:bg-light-secondary`}
                onClick={handleDarkmode}
              >
                <li className={`box-row items-center my-2 p-1 `}>
                  <ChangeTheme
                    className="mx-2"
                    style={{
                      color: `${colors_variants.icons}`,
                    }}
                  />
                  {darkmode ? "Light Theme" : "Dark Theme"}
                </li>
              </a>
            </Link>
            <Link href="/session/login">
              <a
                className={` transition-all hover:bg-light-secondary`}
                onClick={handleMenuItemClick}
              >
                <li className={`box-row items-center my-2 p-1 `}>
                  <LogoutIcon
                    className="mx-2"
                    style={{
                      color: `${colors_variants.icons}`,
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
                onClick={handleMenuItemClick}
              />
            </a>
          </Link>
        </div>
        {isMenuOpen ? (
          <div>
            <CloseXIcon
              onClick={handleToggleMenu}
              className="cursor-pointer animate-spin_button"
              style={{
                fontSize: `${ICONS_FONT.icons}`,
                color: `${colors_variants.icons}`,
              }}
            />
          </div>
        ) : (
          <div>
            <MobileMenuIcon
              onClick={handleToggleMenu}
              className="cursor-pointer animate-spin_button"
              style={{
                fontSize: `${ICONS_FONT.icons}`,
                color: `${colors_variants.icons}`,
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
                  className={`top-menu-links transition-all hover:bg-light-secondary`}
                >
                  {
                    <AllUsersIcon
                      className="menu-icons"
                      style={{
                        fontSize: `${ICONS_FONT.icons}`,
                        color: `${colors_variants.icons}`,
                      }}
                    />
                  }
                </a>
              </Link>
            </MenuItems>
          }
          {
            <MenuItems>
              <Link href="/inbox/messages">
                <a
                  className={`top-menu-links transition-all hover:bg-light-secondary`}
                >
                  {
                    <MessageIcon
                      className="menu-icons"
                      style={{
                        fontSize: `${ICONS_FONT.icons}`,
                        color: `${colors_variants.icons}`,
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
                  className={`top-menu-links transition-all hover:bg-light-secondary`}
                >
                  {
                    <SettingsIcon
                      className="menu-icons"
                      style={{
                        fontSize: `${ICONS_FONT.icons}`,
                        color: `${colors_variants.icons}`,
                      }}
                    />
                  }
                </a>
              </Link>
            </MenuItems>
          }
          {
            <MenuItems>
              <Link href="/session/login">
                <a
                  className={`top-menu-links transition-all hover:bg-light-secondary`}
                >
                  {
                    <LogoutIcon
                      className="menu-icons"
                      style={{
                        fontSize: `${ICONS_FONT.icons}`,
                        color: `${colors_variants.icons}`,
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
