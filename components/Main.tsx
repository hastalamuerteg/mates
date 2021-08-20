//Types
import { ILayout } from "../types/layout";

//Context
import { ThemeProvider, useThemeContext } from "../Contexts/ThemeProvider";

export default function Main({ children }: ILayout) {
  const { background } = useThemeContext();
  return (
    <main
      className={`box-col h-screen w-full overflow-y-scroll bg-${background}`}
    >
      {children}
    </main>
  );
}
