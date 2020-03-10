import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route, useLocation } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { token } = useSelector(state => state.currentUser);
  const { pathname } = useLocation();

  return (
    <Route
      {...rest}
      render={({ location, ...props }) =>
        token 
        ? <Component {...props} /> 
        : pathname !== '/register' 
        ? <Redirect to={{ pathname: "/register", state: { from: location.pathname } }} />
        : null
      }
    />
  );
};

export default PrivateRoute;
