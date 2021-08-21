//Next
import Link from "next/link";
import Image from "next/image";

//Assets
import error_404 from "../assets/error_404.png";

//Context
import { useThemeContext } from "../Contexts/ThemeProvider";

export default function Page404() {
  const { darkmode } = useThemeContext();
  return (
    <>
      <div
        className={`box-col justify-center items-center text-center h-screen p-2 ${
          darkmode ? "bg-light-background" : "bg-dark-background"
        }`}
      >
        <picture>
          <Image
            alt="404 robot"
            src={error_404}
            width={450}
            height={450}
            className={`transition-all animate-fade_in_up`}
          />
        </picture>
        <p
          className={`inline-block font-bold transition-all animate-fade_in_up ${
            darkmode ? "text-dark-text-primary" : "text-light-text-primary"
          }`}
        >
          We couldn&apos;t find the page you are looking for.
        </p>
        <Link href="/">
          <a
            className={`$ px-6 py-4 rounded-xl shadow-md bg-light-primary font-semibold m-4 text-light-text-primary transition-all animate-fade_in_up`}
          >
            ← Get back home
          </a>
        </Link>
      </div>
    </>
  );
}
