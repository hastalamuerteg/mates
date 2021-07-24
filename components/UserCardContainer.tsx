import { TUserContainer } from "../types/users";

export default function UserCardContainer({
  children,
}: {
  children: TUserContainer;
}) {
  return (
    <div className="flex flex-col justify-center items-center flex-wrap p-4 mx-auto shadow-md rounded-md md:flex md:flex-row">
      {children}
    </div>
  );
}
