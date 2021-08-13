//Types
import { ILayout } from "../types/layout";

//Helpers
import { THEME } from "../helpers/helpers.styles";

export default function Main({ children }: ILayout) {
  return (
    <main
      className={`flex flex-col h-screen w-full overflow-y-scroll bg-${THEME.background}`}
    >
      {children}
    </main>
  );
}
