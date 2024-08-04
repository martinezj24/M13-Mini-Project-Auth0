import { useAuth0 } from '@auth0/auth0-react';

const useAuth = () => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  return { loginWithRedirect, logout, user, isAuthenticated };
};

export default useAuth;
