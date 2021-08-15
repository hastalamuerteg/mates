import Link from "next/link";
import Image from "next/image";
import error_404 from "../assets/error_404.png";
import { THEME } from "../helpers/helpers.styles";

export default function Page404() {
  return (
    <>
      <div
        className={`box-col justify-center items-center text-center h-screen p-2 bg-${THEME.background}`}
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
          className={`inline-block font-bold transition-all animate-fade_in_up text-${THEME.text.primary}`}
        >
          We couldn&apos;t find the page you are looking for.
        </p>
        <Link href="/home">
          <a
            className={`$ px-6 py-4 rounded-xl shadow-md bg-${THEME.primary} font-semibold m-4 text-${THEME.text.secondary} transition-all animate-fade_in_up`}
          >
            ← Get back home
          </a>
        </Link>
      </div>
    </>
  );
}
