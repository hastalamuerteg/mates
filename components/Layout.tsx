//React
import { ReactNode } from "react";

//Components
import TopMenu from "./TopMenu";
import SideMenu from "./SideMenu";
import Main from "./Main";
import MobileMenu from "./MobileMenu";

//Context
import { useThemeContext } from "../Contexts/ThemeProvider";

//Next
import Head from "next/head";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  const { darkmode } = useThemeContext();
  return (
    <>
      <Head>
        <title>{`Mates`}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header
        className={`flex w-full ${
          darkmode ? "text-dark-tertiary" : "text-light-tertiary"
        }`}
      >
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
