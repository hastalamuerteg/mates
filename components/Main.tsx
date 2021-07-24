import { ILayout } from "../types/layout";

export default function Main({ children }: ILayout) {
  return (
    <main className="flex flex-col h-screen overflow-scroll overflow-x-hidden bg-white">
      {children}
    </main>
  );
}
