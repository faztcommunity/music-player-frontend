import { AuthContext } from '@context/Auth';
import { useContext } from 'react';

export default function useUser() {
  const { isLoggedIn, user = {}, logIn, logOut } = useContext(AuthContext);

  user.logIn = logIn;
  user.logOut = logOut;

  return { user, isLoggedIn };
}
