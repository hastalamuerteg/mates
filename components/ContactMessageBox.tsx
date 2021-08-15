//Next
import Image from "next/image";

//Assets
import profile from "../assets/profile.jpg";
import { THEME } from "../helpers/helpers.styles";

export default function ContactMessageBox() {
  return (
    <div
      className={`box-row justify-start items-start w-full h-18 p-2 m-1 cursor-pointer`}
    >
      <picture>
        <Image
          alt="profile picture"
          src={profile}
          width={50}
          height={50}
          className="rounded-full"
        />
      </picture>
      <div
        className={`box-col items-start w-full h-full px-2 border-b border-opacity-25 border-${THEME.secondary} text-${THEME.text.primary}`}
      >
        <div className={`box-row justify-between items-start w-full h-auto`}>
          <h6 className="text-sm font-semibold cursor-pointer">Gabriel</h6>
          <small>12:02</small>
        </div>
        <div className={`box-col justify-start items-start mb-1`}>
          <small className="w-4/5">
            Lorem ipsum dolor sit amet, adipiscing elit...
          </small>
        </div>
      </div>
    </div>
  );
}
