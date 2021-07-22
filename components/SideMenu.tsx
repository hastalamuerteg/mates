import Link from "next/link";

//Components
import SideMenuItems from "../components/SideMenuItems";

//Types
import { ILayout } from "../types/types";

//Helpers
import { basicGlobalStyles } from "../helpers/helpers.styles";

//Assets
import {
  HomeIcon,
  NewUserIcon,
  AllUsers,
  ChangePassword,
} from "../icons/icons";

const { iconsSize, sideMenuLinks, sideMenuIcons } = basicGlobalStyles;

export default function SideMenu({ children }: ILayout) {
  return (
    <header className="flex items-center h-screen w-screen py-4 pr-4 bg-gradient-to-t from-blue-800 via-blue-600 to-blue-500">
      <nav
        className={`${basicGlobalStyles.flexColumnContainer} justify-center  w-1/5 h-screen`}
      >
        <ul
          className={`${basicGlobalStyles.flexColumnContainer}  space-y-10 w-full`}
        >
          <Link href="/">
            <a className={`${sideMenuLinks}`}>
              {
                <SideMenuItems>
                  <HomeIcon size={iconsSize} className={`${sideMenuIcons}`} />
                </SideMenuItems>
              }
              Home
            </a>
          </Link>
          <Link href="/users/new-user">
            <a className={`${sideMenuLinks}`}>
              {
                <SideMenuItems>
                  <NewUserIcon
                    size={iconsSize}
                    className={`${sideMenuIcons}`}
                  />
                </SideMenuItems>
              }
              New
            </a>
          </Link>

          <Link href="/users/all-users">
            <a className={`${sideMenuLinks}`}>
              {
                <SideMenuItems>
                  <AllUsers size={iconsSize} className={`${sideMenuIcons}`} />
                </SideMenuItems>
              }
              Friends
            </a>
          </Link>

          <Link href="/actions/change-password">
            <a className={`${sideMenuLinks}`}>
              {
                <SideMenuItems>
                  <ChangePassword
                    size={iconsSize}
                    className={`${sideMenuIcons}`}
                  />
                </SideMenuItems>
              }
              Security
            </a>
          </Link>
        </ul>
      </nav>
      <main className="flex flex-col items-center h-full w-full rounded-3xl bg-white">
        {children}
      </main>
    </header>
  );
}
