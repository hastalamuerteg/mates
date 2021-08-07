import Image from "next/image";
import logo from "../assets/logo.png";
import LoginSession from "./session/login-session";
import { GLOBAL_THEME } from "../helpers/helpers.styles";

export default function Page() {
  return (
    <header className="flex justify-center items-center h-screen ">
      <div
        className={`flex flex-col justify-center items-center w-1/2 text-center text-blue-500 h-screen ${GLOBAL_THEME.loginScreenWelcome}`}
      >
        <div
          className={`flex flex-col justify-center items-center p-2 h-5/6 w-4/6 ${GLOBAL_THEME.loginScreenWelcomeContainer} ${GLOBAL_THEME.loginScreenFormText} rounded-2xl shadow-xl`}
        >
          <h1 className="text-xl m-4">
            Welcome to <br />
            <span className="text-7xl font-bold">Mates</span>
          </h1>
          <p>An online platform to get in touch with your buddies</p>
          <form
            className={`flex flex-col justify-center items-center w-full p-2 mt-8 `}
          >
            <input
              className={`p-2 w-80 ${GLOBAL_THEME.loginScreenWelcomeInput} border-2 m-4 rounded-lg focus:outline-none`}
              type="email"
              placeholder="Email"
            />
            <button
              className={`${GLOBAL_THEME.loginScreenWelcomeButton} py-2 px-8 rounded-lg font-semibold`}
            >
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
