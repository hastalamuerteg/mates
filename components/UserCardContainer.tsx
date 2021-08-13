//React
import { ReactNode } from "react";

//Helpers
import { THEME, GLOBAL_CONTAINERS } from "../helpers/helpers.styles";

//Components
import PrimaryButton from "./PrimaryButton";

interface Props {
  children: ReactNode;
}

export default function UserCardContainer({ children }: Props) {
  return (
    <>
      <div className="flex justify-center items-center flex-wrap md:px-12 mx-auto  md:flex">
        {children}
      </div>
      <div
        className={`${GLOBAL_CONTAINERS.flexRowContainer} justify-center m-4 mb-20`}
      >
        <PrimaryButton
          fontColor={`text-${THEME.tertiary}`}
          backgroundColor={`bg-${THEME.primary}`}
        >
          Load more
        </PrimaryButton>
      </div>
    </>
  );
}
