//Types
import { GLOBAL_THEME } from "../helpers/helpers.styles";
import { ILayout } from "../types/layout";

export default function Main({ children }: ILayout) {
  return (
    <main
      className={`flex flex-col h-screen w-full overflow-y-scroll ${GLOBAL_THEME.globalBackgroundColor}`}
    >
      {children}
    </main>
  );
}
