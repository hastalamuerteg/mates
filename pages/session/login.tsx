//Next
import Image from "next/image";
import Head from "next/head";

//Assets
import logo from "../../assets/logo.png";

//Components
import LoginButton from "../../components/LoginButton";

export default function Page() {
  return (
    <>
      <Head>
        <title>{`Mates | Login`}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header className="flex justify-center items-center h-screen ">
        <div
          className={`box-col justify-center items-center w-full md:w-1/2 text-center p-2 h-full md:h-screen bg-gradient-to-r from-light-primary via-light-secondary to-light-secondary`}
        >
          <div
            className={`box-col justify-center items-center px-4 md:h-5/6 w-auto xl:w-4/6 m-4 bg-light-tertiary text-light-primary rounded-2xl shadow-xl`}
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
                className={`p-2 w-full md:w-5/6 border-light-primary border-b m-4 focus:outline-none`}
                type="email"
                placeholder="Email"
              />
              <button
                className={`border-light-primary border-2 text-light-primary w-full md:w-3/6 py-2 px-8 rounded-lg font-semibold transition-all hover:bg-light-primary hover:text-light-text-primary`}
              >
                Sign up
              </button>
              <div className="my-2 w-full md:hidden">
                <LoginButton />
              </div>
            </form>
          </div>
        </div>
        <div
          className={`hidden md:flex justify-center items-center w-1/2 h-screen bg-light-tertiary`}
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
              <LoginButton />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
