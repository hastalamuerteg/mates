//React
import { ReactNode } from "react";

//Components
import PrimaryButton from "./PrimaryButton";

//Context
import { useThemeContext } from "../Contexts/ThemeProvider";

interface Props {
  children: ReactNode;
}

export default function UserCardContainer({ children }: Props) {
  const { primaryColor } = useThemeContext();
  return (
    <>
      <div className="flex justify-center items-center flex-wrap md:px-12 mx-auto  md:flex">
        {children}
      </div>
      <div className={`box-row justify-center m-4 mb-20`}>
        <PrimaryButton backgroundColor={`bg-${primaryColor}`}>
          Load more
        </PrimaryButton>
      </div>
    </>
  );
}
