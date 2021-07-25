import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function UserCardContainer({ children }: Props) {
  return (
    <div className="flex flex-col justify-center items-center flex-wrap p-4 mx-auto shadow-md rounded-md md:flex md:flex-row">
      <h2 className="block w-full text-lg text-blue-700 font-semibold pl-4">
        Friends
      </h2>
      {children}
    </div>
  );
}
