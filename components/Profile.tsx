//test component

import { useAuth0 } from "@auth0/auth0-react";

export default function Profile() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log(user);

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <h2>{user?.phone_number}</h2>
    </div>
  );
}
