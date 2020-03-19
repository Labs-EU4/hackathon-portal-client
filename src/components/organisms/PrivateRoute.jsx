import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
//changed component to render, to be able to pass down props
const PrivateRoute = ({ render: Component, ...rest }) => {
  const { token } = useSelector(state => state.currentUser);
  return (
    <Route
      {...rest}
      render={({ location, ...props }) =>
        token ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/register", state: { from: location.pathname } }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
