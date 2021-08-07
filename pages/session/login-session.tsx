import { useAuth0 } from "@auth0/auth0-react";
import { GLOBAL_THEME } from "../../helpers/helpers.styles";

export default function LoginSession() {
  const { loginWithRedirect } = useAuth0();

  function handleUserLogin() {
    loginWithRedirect();
  }
  return (
    <button
      className={`py-2 px-8 rounded-lg border-2 ${GLOBAL_THEME.loginScreenWelcomeLoginButton} font-semibold transition-all hover:${GLOBAL_THEME.loginScreenWelcomeLoginButtonHover}`}
      onClick={handleUserLogin}
    >
      Log in
    </button>
  );
}
