import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function UserCardContainer({ children }: Props) {
  return (
    <div className="flex flex-col justify-center items-center flex-wrap p-4 mx-auto  md:flex md:flex-row">
      <div className="flex justify-start items-center mx-auto w-full">
        <h2 className="text-2xl text-blue-600 m-2 p-2 font-bold">Friends</h2>
      </div>
      {children}
    </div>
  );
}
