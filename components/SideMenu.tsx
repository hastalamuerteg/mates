import Link from "next/link";
import SideMenuItems from "./SideMenuItems";
import {
  HiOutlineHome as HomeIcon,
  HiUserAdd as NewUserIcon,
  HiUsers as AllUsers,
} from "react-icons/hi";

import { RiLockPasswordLine as ChangePassword } from "react-icons/ri";

export const basicGlobalStyles = {
  flexColumnContainer: "flex flex-col text-center items-center",
  iconsSize: "28",
  iconsColor: "text-gray-700",
};

const { iconsColor, iconsSize } = basicGlobalStyles;

export default function SideMenu() {
  return (
    <nav
      className={`${basicGlobalStyles.flexColumnContainer} bg-yellow-200 p-4 w-20 h-screen shadow-xxl`}
    >
      <ul className={`${basicGlobalStyles.flexColumnContainer} space-y-10`}>
        <Link href="/">
          <a>
            <SideMenuItems>
              <HomeIcon size={iconsSize} className={`${iconsColor} `} />
            </SideMenuItems>
          </a>
        </Link>
        <Link href="./users/new-user">
          <a>
            <SideMenuItems>
              <NewUserIcon size={iconsSize} className={`${iconsColor} `} />
            </SideMenuItems>
          </a>
        </Link>

        <Link href="./users/all-users">
          <a>
            <SideMenuItems>
              <AllUsers size={iconsSize} className={`${iconsColor} `} />
            </SideMenuItems>
          </a>
        </Link>

        <Link href="./actions/change-password">
          <a>
            <SideMenuItems>
              <ChangePassword size={iconsSize} className={`${iconsColor} `} />
            </SideMenuItems>
          </a>
        </Link>
      </ul>
    </nav>
  );
}
