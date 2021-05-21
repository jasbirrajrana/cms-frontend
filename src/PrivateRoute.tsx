import React, { Component, useContext } from "react";
import { Redirect, Route } from "react-router";
import { AuthContext } from "./context/auth";

interface PrivateRouteProps {
  component: any;
  path: string;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
  path,
  ...rest
}) => {
  let isPrivate = false;
  const { user } = useContext(AuthContext);
  if (user) {
    isPrivate = true;
  }
  return isPrivate ? (
    <Redirect to="/" />
  ) : (
    <Route {...rest} render={(props) => <Component {...rest} {...props} />} />
  );
};
export default PrivateRoute;
