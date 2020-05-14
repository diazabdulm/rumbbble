import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import { fetchUser } from "./reducers/authSlice";

import Navigation from "./components/Navigation";
import PrivateRoute from "./components/PrivateRoute";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Upload from "./pages/Upload";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/projects/new" component={Upload} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
