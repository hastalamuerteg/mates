import Link from "next/link";

//Helpers
import { THEME } from "../../helpers/helpers.styles";

export default function LoginSession() {
  return (
    <Link href="/api/auth/login">
      <a
        className={`inline-block w-full py-2 px-8 rounded-lg text-${THEME.text.secondary} border-2 bg-${THEME.primary} active:bg-${THEME.secondary} font-semibold transition-all hover:bg-${THEME.tertiary} hover:text-${THEME.text.primary}`}
      >
        Log in
      </a>
    </Link>
  );
}
