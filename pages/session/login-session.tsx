//Authentication
import { useAuth0 } from "@auth0/auth0-react";

//Helpers
import { THEME } from "../../helpers/helpers.styles";

export default function LoginSession() {
  const { loginWithRedirect } = useAuth0();

  function handleUserLogin() {
    loginWithRedirect();
  }
  return (
    <button
      className={`w-full py-2 px-8 rounded-lg text-${THEME.text.secondary} border-2 bg-${THEME.primary} active:bg-${THEME.secondary} font-semibold transition-all hover:bg-${THEME.tertiary} hover:text-${THEME.text.primary}`}
      onClick={handleUserLogin}
    >
      Log in
    </button>
  );
}
