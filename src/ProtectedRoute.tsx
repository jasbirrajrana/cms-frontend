import React, { Component, useContext } from "react";
import { Redirect, Route } from "react-router";
import { AuthContext } from "./context/auth";

interface ProtectedRouteProps {
  component: any;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  component: Component,
  ...rest
}) => {
  let isAuth = false;
  const { user } = useContext(AuthContext);
  if (user) {
    isAuth = true;
  }
  return isAuth ? (
    <Route {...rest} render={(props) => <Component {...rest} {...props} />} />
  ) : (
    <Redirect to="/" />
  );
};
export default ProtectedRoute;
