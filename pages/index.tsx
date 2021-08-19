//Next
import Image from "next/image";

//Assets
import logo from "../assets/logo.png";

//Auth Login
import LoginSession from "./session/login-session";

//Components
import { ThemeContext } from "../Contexts/ThemeProvider";
import { useContext } from "react";

export default function Page() {
  const {
    background,
    color,
    primaryColor,
    secondaryColor,
    tertiaryColor,
    theme,
    textSecondary,
    toggleTheme,
  } = useContext(ThemeContext);
  return (
    <header className="flex justify-center items-center h-screen ">
      <div
        className={`box-col justify-center items-center w-full md:w-1/2 text-center p-2 h-full md:h-screen bg-${primaryColor}`}
      >
        <div
          className={`box-col justify-center items-center px-4 md:h-5/6 w-auto m-4 bg-${background} text-${primaryColor} rounded-2xl shadow-xl`}
        >
          <picture className="md:hidden mt-4">
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
            className={`box-col justify-center items-center w-full p-2 mt-8 `}
          >
            <input
              className={`p-2 w-full md:w-5/6 border-${primaryColor} border-2 m-4 rounded-lg focus:outline-none`}
              type="email"
              placeholder="Email"
            />
            <button
              className={`bg-${tertiaryColor} text-${primaryColor} active:bg-${secondaryColor} w-full md:w-3/6 py-2 px-8 rounded-lg font-semibold transition-all hover:bg-${primaryColor} hover:text-${textSecondary}`}
            >
              Sign up
            </button>
            <div className="my-2 w-full md:hidden">
              <LoginSession />
            </div>
          </form>
        </div>
      </div>
      <div
        className={`hidden md:flex justify-center items-center w-1/2 h-screen bg-${background}`}
      >
        <div className="box-col justify-center items-center h-5/6">
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
