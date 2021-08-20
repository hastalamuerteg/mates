//Next
import Link from "next/link";

//Context
import { useThemeContext } from "../Contexts/ThemeProvider";

export default function LoginButton() {
  const {
    primaryColor,
    secondaryColor,
    tertiaryColor,
    textPrimary,
    textSecondary,
  } = useThemeContext();
  return (
    <Link href="/api/auth/login">
      <a
        className={`inline-block w-full py-2 px-8 rounded-lg text-${textSecondary} border-2 bg-${primaryColor} active:bg-${secondaryColor} font-semibold transition-all hover:bg-${tertiaryColor} hover:text-${textPrimary}`}
      >
        Log in
      </a>
    </Link>
  );
}
