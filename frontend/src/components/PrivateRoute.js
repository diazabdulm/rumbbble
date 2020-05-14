import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { selectUser } from "../reducers/authSlice";

export default function PrivateRoute({ component: Component, ...restProps }) {
  const user = useSelector(selectUser);
  return (
    <Route
      {...restProps}
      render={(props) =>
        user ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}
