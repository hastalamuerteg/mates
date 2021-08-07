//React
import { ReactNode } from "react";

//Components
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
        <SideMenu />
        <Main>
          <TopMenu />
          {children}
        </Main>
      </header>
    </>
  );
}
