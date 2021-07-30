import Image from "next/image";
import logo from "../assets/logo.png";
import LoginSession from "./session/login-session";

export default function Page() {
  return (
    <>
      <header className="flex justify-center items-center h-screen ">
        <div className="flex flex-col justify-center items-center w-1/2 text-center text-white h-screen bg-gradient-to-t from-blue-700 via-blue-500 to-blue-500 ">
          <div className="flex flex-col justify-center items-center w-full">
            <h1 className="text-2xl m-4">
              Welcome to <br />
              <span className="text-7xl font-bold">Mates</span>
            </h1>
            <p>An online platform to get in touch with your buddies</p>
            <form className="flex flex-col justify-center items-center w-full text-gray-400">
              <input className="p-2" type="text" />
              <button>Sign up</button>
            </form>
          </div>
        </div>
        <div className="flex flex-col justify-around items-center w-1/2">
          <div>
            <Image
              className="rounded-full"
              alt="mates logo"
              src={logo}
              height={120}
              width={120}
            />
          </div>
          <div>
            <LoginSession />
          </div>
        </div>
      </header>
    </>
  );
}
