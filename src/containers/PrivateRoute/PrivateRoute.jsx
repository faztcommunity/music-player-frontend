import React, { useContext } from 'react';
import { AuthContext } from '../../context/Auth';
import { Route, Redirect, useLocation } from 'react-router-dom';

export default function PrivateRoute({ component: Component, ...rest }) {
  const location = useLocation();
  const { isLoggedIn } = useContext(AuthContext);

  function handleRender(routeProps) {
    if (isLoggedIn) return <Component {...routeProps} />;

    const url = location.pathname + location.search;
    let redirectUrl = '/login';
    if (url) {
      redirectUrl += '?next=' + url;
    }

    return <Redirect to={redirectUrl} />;
  }

  return <Route {...rest} render={handleRender} />;
}
