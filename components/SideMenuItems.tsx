import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function SideMenuItems({ children }: Props) {
  return <li className="block w-full">{children}</li>;
}
