//Next
import Link from "next/link";
import Image from "next/image";

//Assets
import error_404 from "../assets/error_404.png";

//Context
import { ThemeContext } from "../Contexts/ThemeProvider";
import { useContext } from "react";

export default function Page404() {
  const {
    background,
    color,
    primaryColor,
    secondaryColor,
    tertiaryColor,
    theme,
    textPrimary,
    textSecondary,
    toggleTheme,
  } = useContext(ThemeContext);
  return (
    <>
      <div
        className={`box-col justify-center items-center text-center h-screen p-2 bg-${background}`}
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
          className={`inline-block font-bold transition-all animate-fade_in_up text-${textPrimary}`}
        >
          We couldn&apos;t find the page you are looking for.
        </p>
        <Link href="/">
          <a
            className={`$ px-6 py-4 rounded-xl shadow-md bg-${primaryColor} font-semibold m-4 text-${textSecondary} transition-all animate-fade_in_up`}
          >
            ← Get back home
          </a>
        </Link>
      </div>
    </>
  );
}
