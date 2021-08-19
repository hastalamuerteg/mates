//React
import { ReactNode, useContext } from "react";

//Components
import TopMenu from "./TopMenu";
import SideMenu from "./SideMenu";
import Main from "./Main";
import MobileMenu from "./MobileMenu";

//Context
import { ThemeProvider, ThemeContext } from "../Contexts/ThemeProvider";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  const {
    background,
    color,
    primaryColor,
    secondaryColor,
    tertiaryColor,
    theme,
    textPrimary,
    textSecondary,
    toggleTheme,
  } = useContext(ThemeContext);
  return (
    <>
      <ThemeProvider>
        <header className={`flex w-full text-${textPrimary}`}>
          <SideMenu />
          <Main>
            <TopMenu />
            {children}
          </Main>
          <MobileMenu />
        </header>
      </ThemeProvider>
    </>
  );
}
