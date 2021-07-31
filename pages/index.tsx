import Image from "next/image";
import logo from "../assets/logo.png";
import LoginSession from "./session/login-session";

export default function Page() {
  return (
    <header className="flex justify-center items-center h-screen ">
      <div className="flex flex-col justify-center items-center w-1/2 text-center text-blue-500 h-screen bg-gradient-to-t from-blue-700 via-blue-500 to-blue-500 ">
        <div className="flex flex-col justify-center items-center h-5/6 w-4/6 border-2 border-white bg-white rounded-2xl shadow-xl">
          <h1 className="text-xl m-4">
            Welcome to <br />
            <span className="text-7xl font-bold">Mates</span>
          </h1>
          <p>An online platform to get in touch with your buddies</p>
          <form className="flex flex-col justify-center items-center w-full p-2 mt-8 text-gray-700">
            <input
              className="p-2 w-80  bg-gray-100 m-4 rounded-lg focus:outline-none"
              type="email"
              placeholder="Email"
            />
            <button className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-500 py-2 px-8 rounded-lg text-white font-semibold transition-all hover:bg-blue-600">
              Sign up
            </button>
          </form>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-1/2 h-screen">
        <div className="flex flex-col justify-center items-center h-5/6 w-4/6 ">
          <div className="p-2 mb-8">
            <Image
              className="rounded-full"
              alt="mates logo"
              src={logo}
              height={100}
              width={100}
            />
          </div>
          <div>
            <LoginSession />
          </div>
        </div>
      </div>
    </header>
  );
}
