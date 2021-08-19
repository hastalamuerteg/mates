//Next
import Link from "next/link";

//Context
import { ThemeContext } from "../../Contexts/ThemeProvider";
import { useContext } from "react";

export default function LoginSession() {
  const {
    background,
    color,
    primaryColor,
    secondaryColor,
    tertiaryColor,
    textPrimary,
    textSecondary,
    theme,
    toggleTheme,
  } = useContext(ThemeContext);
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
