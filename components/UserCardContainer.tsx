//React
import { ReactNode } from "react";
import { GLOBAL_THEME, GLOBAL_CONTAINERS } from "../helpers/helpers.styles";
import PrimaryButton from "./PrimaryButton";

interface Props {
  children: ReactNode;
}

export default function UserCardContainer({ children }: Props) {
  return (
    <>
      <div className="flex flex-col justify-center items-center flex-wrap px-12 mx-auto  md:flex md:flex-row">
        {children}
      </div>
      <div
        className={`${GLOBAL_CONTAINERS.flexRowContainer} justify-center m-4`}
      >
        <PrimaryButton
          fontColor={`${GLOBAL_THEME.primaryButtonBackgroundColor}`}
          backgroundColor={`${GLOBAL_THEME.primaryButtonFontColor}`}
        >
          Load more
        </PrimaryButton>
      </div>
    </>
  );
}
