import React from "react";
import { useStateValue } from "./authantication";
import { Navigate } from "react-router-dom";
import Home from "../Notes/Home";

const ProtectedRoute = ({ element: Component, ...rest }) => {
  const { user } = useStateValue();
  return user ? <Component {...rest} /> : <Navigate to="/" />;
};

export default ProtectedRoute;
