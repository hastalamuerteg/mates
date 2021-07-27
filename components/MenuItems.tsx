import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function MenuItems({ children }: Props) {
  return (
    <li className="flex justify-center items-center  h-full ">{children}</li>
  );
}
