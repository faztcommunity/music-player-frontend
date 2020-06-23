import { useContext } from 'react';
import { AuthContext } from '@context/Auth';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';

export default function useUser(required = true) {
  const history = useHistory();
  const { isLoggedIn, user = {}, logIn, logOut } = useContext(AuthContext);

  useEffect(() => {
    if (!required || isLoggedIn) return;
    const location = history.location;
    const url = location.pathname + location.search;
    let redirectUrl = '/login';
    if (url) {
      redirectUrl += '?next=' + url;
    }
    history.push(redirectUrl);
  }, [user, history, required, isLoggedIn]);

  user.logIn = logIn;
  user.logOut = logOut;

  return { user, isLoggedIn };
}
