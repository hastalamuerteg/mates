//React
import { ReactNode } from "react";

//Components
import TopMenu from "./TopMenu";
import SideMenu from "./SideMenu";
import Main from "./Main";
import MobileMenu from "./MobileMenu";
import { THEME } from "../helpers/helpers.styles";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <header className={`flex w-full text-${THEME.text.primary}`}>
        <SideMenu />
        <Main>
          <TopMenu />
          {children}
        </Main>
        <MobileMenu />
      </header>
    </>
  );
}
