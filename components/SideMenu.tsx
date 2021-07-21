import SideMenuItems from "./SideMenuItems";
import { FiUsers as AllUsersIcon } from "react-icons/fi";

export default function SideMenu() {
  return (
    <nav className="flex flex-col justify-start items-center bg-indigo-500 w-20 h-screen">
      <ul>
        <SideMenuItems>
          <AllUsersIcon />
        </SideMenuItems>
        <SideMenuItems>teste</SideMenuItems>
        <SideMenuItems>teste</SideMenuItems>
        <SideMenuItems>teste</SideMenuItems>
      </ul>
    </nav>
  );
}
