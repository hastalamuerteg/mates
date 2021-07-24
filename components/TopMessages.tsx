import { basicGlobalStyles } from "../helpers/helpers.styles";
import { message } from "../types/layout";

export default function TopMessages({ message }: { message: message }) {
  return (
    <div className="flex justify-start w-full p-4 ml-24 mt-16 my-6">
      <p className="text-3xl text-gray-700">{message}</p>
    </div>
  );
}
