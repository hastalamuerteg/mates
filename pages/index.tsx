//Next
import Image from "next/image";

//Assets
import logo from "../assets/logo.png";

//Auth Login
import LoginSession from "./session/login-session";

//Helpers
import { THEME } from "../helpers/helpers.styles";

export default function Page() {
  return (
    <header className="flex justify-center items-center h-screen ">
      <div
        className={`flex flex-col justify-center items-center w-full md:w-1/2 text-center h-screen bg-${THEME.primary}`}
      >
        <div
          className={`flex flex-col justify-center items-center px-4 h-5/6 w-auto m-4 bg-${THEME.background} text-${THEME.primary} rounded-2xl shadow-xl`}
        >
          <picture className="md:hidden">
            <Image
              className="rounded-full"
              alt="mates logo"
              src={logo}
              height={50}
              width={50}
            />
          </picture>
          <h1 className="text-xl m-4">
            Welcome to <br />
            <span className="text-7xl font-bold">Mates</span>
          </h1>
          <p>An online platform to get in touch with your buddies</p>
          <form
            className={`flex flex-col justify-center items-center w-full p-2 mt-8 `}
          >
            <input
              className={`p-2 w-full md:w-5/6 border-${THEME.primary} border-2 m-4 rounded-lg focus:outline-none`}
              type="email"
              placeholder="Email"
            />
            <button
              className={`bg-${THEME.tertiary} text-${THEME.primary} border border-${THEME.primary} w-full md:w-3/6 py-2 px-8 rounded-lg font-semibold transition-all hover:bg-${THEME.primary} hover:text-${THEME.text.secondary}`}
            >
              Sign up
            </button>
            <div className="my-2 w-full md:hidden">
              <LoginSession />
            </div>
          </form>
        </div>
      </div>
      <div className="hidden md:flex flex-col justify-center items-center w-1/2 h-screen">
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
