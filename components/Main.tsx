//Types
import { ILayout } from "../types/layout";

//Context
import { useThemeContext } from "../Contexts/ThemeProvider";

export default function Main({ children }: ILayout) {
  const { darkmode } = useThemeContext();
  return (
    <main
      className={`box-col h-screen w-full overflow-y-scroll ${
        darkmode ? "bg-dark-background" : "bg-light-background"
      }`}
    >
      {children}
    </main>
  );
}
