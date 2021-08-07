//React
import { ReactNode } from "react";
import { GLOBAL_TYPOGRAPHY } from "../helpers/helpers.styles";

interface Props {
  children: ReactNode;
}

export default function UserCardContainer({ children }: Props) {
  return (
    <div className="flex flex-col justify-center items-center flex-wrap px-12 mx-auto  md:flex md:flex-row">
      {children}
    </div>
  );
}
