//Next
import Link from "next/link";

export default function LoginButton() {
  return (
    <Link href="/home">
      <a
        className={`inline-block w-full py-2 px-8 rounded-lg text-light-text-primary border-2 bg-light-primary active:bg-light-secondary font-semibold transition-all hover:bg-light-tertiary hover:text-light-primary`}
      >
        Log in
      </a>
    </Link>
  );
}
