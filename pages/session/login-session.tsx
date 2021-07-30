import { useAuth0 } from "@auth0/auth0-react";

export default function LoginSession() {
  const { loginWithRedirect } = useAuth0();

  function handleUserLogin() {
    loginWithRedirect();
  }
  return (
    <button
      className="py-4 px-8 shadow-md rounded-lg bg-blue-500 text-white"
      onClick={handleUserLogin}
    >
      Log in
    </button>
  );
}
