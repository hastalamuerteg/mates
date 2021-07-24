import { ILayout } from "../types/layout";

export default function TopMenu({ children }: ILayout) {
  return (
    <header className="flex justify-center items-center py-2 w-full bg-white border h-10 fixed z-20">
      {children}
    </header>
  );
}
