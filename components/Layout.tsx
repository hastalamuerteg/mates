import { ReactNode } from "react";
import TopMenu from "./TopMenu";
import SideMenu from "./SideMenu";
import Main from "./Main";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <header className="flex w-full">
        <TopMenu />
        <SideMenu />
        <Main>{children}</Main>
      </header>
    </>
  );
}