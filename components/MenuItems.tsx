import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function MenuItems({ children }: Props) {
  return <li>{children}</li>;
}
