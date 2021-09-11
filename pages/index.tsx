//Next
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

//Assets
import MatesIndex from "../assets/mates_lp.png";
import logo from "../assets/logo.png";

export default function Homepage() {
  return (
    <>
      <Head>
        <title>{`Welcome to Mates`}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header className={`box-row justify-center items-center`}>
        <picture>
          <Image
            alt="computers and a globe being shown as a connection between people"
            src={logo}
            width={75}
            height={75}
            className="rounded-full"
          />
        </picture>
      </header>
      <div
        className={`box-col justify-center md:flex md:flex-row md:justify-between items-center px-6 2xl:h-screen`}
      >
        <picture className="box-row items-center justify-center md:w-1/2">
          <Image
            alt="computers and a globe being showing connection between people"
            src={MatesIndex}
            width={500}
            height={500}
          />
        </picture>
        <div className="box-col justify-center md:items-start md:w-1/2 text-center  md:text-left">
          <h1
            className={`text-light-primary text-5xl md:text-7xl 2xl:text-8xl font-semibold tracking-wide mb-4`}
          >
            Welcome to Mates
          </h1>
          <p>Your new place to connect.</p>
          <div className={`box-col md:flex md:flex-row my-4`}>
            <Link href="./session/login">
              <a
                className={`flex justify-center items-center w-full my-1 mx-1  lg:w-auto py-3 px-8 rounded-lg text-light-text-primary border-2 bg-light-primary active:bg-light-secondary font-semibold `}
              >
                Login
              </a>
            </Link>
            <Link href="./session/login">
              <a
                className={`flex justify-center items-center w-full my-1 mx-1  lg:w-auto py-3 px-8 rounded-lg text-light-text-primary border-2 bg-light-primary active:bg-light-secondary font-semibold `}
              >
                Sign up
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
