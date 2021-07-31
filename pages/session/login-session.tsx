import { useAuth0 } from "@auth0/auth0-react";

export default function LoginSession() {
  const { loginWithRedirect } = useAuth0();

  function handleUserLogin() {
    loginWithRedirect();
  }
  return (
    <button
      className=" py-2 px-8 rounded-lg border-2 border-blue-600 text-blue-600 font-semibold transition-all hover:bg-blue-600 hover:text-white"
      onClick={handleUserLogin}
    >
      Log in
    </button>
  );
}
