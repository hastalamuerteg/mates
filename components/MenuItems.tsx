import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function MenuItems({ children }: Props) {
  return <li>{children}</li>;
}
