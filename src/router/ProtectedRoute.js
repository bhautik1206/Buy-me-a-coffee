import React from 'react';

import PropType from 'prop-types';
import { Navigate, Outlet, useSearchParams } from 'react-router-dom';

import useLocalStorage from '#/hooks/useLocalStorage';

const ProtectedRoute = ({ fallbackRoute, ...rest }) => {
  const [searchParams] = useSearchParams();
  // Protect routes when user is logged in or when it has valid tokens
  // in the url query string. We want to protect `reset-password` route
  // when user is resetting their account password.
  const [token] = useLocalStorage('token', null);
  const isVerifying = searchParams.get('token');

  if (!token && !isVerifying) {
    return (
      <Navigate
        {...rest}
        to={{
          pathname: fallbackRoute,
          state: { from: rest.location },
        }}
        replace
      />
    );
  }

  // Instead of returning child element we return Outlet so we can
  // render child routes.
  return <Outlet {...rest} />;
};

ProtectedRoute.propTypes = {
  fallbackRoute: PropType.string,
  element: PropType.node,
};

ProtectedRoute.defaultProps = {
  fallbackRoute: '/login',
  element: null,
};

export default ProtectedRoute;
