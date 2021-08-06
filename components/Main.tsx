//Types
import { GLOBAL_THEME } from "../helpers/helpers.styles";
import { ILayout } from "../types/layout";

export default function Main({ children }: ILayout) {
  return (
    <main
      className={`flex flex-col h-screen w-screen px-6 pt-2 overflow-scroll overflow-x-hidden ${GLOBAL_THEME.globalBackgroundColor}`}
    >
      {children}
    </main>
  );
}
