import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import { fetchUser } from "./reducers/authSlice";

import Navigation from "./components/Navigation";
import PrivateRoute from "./components/PrivateRoute";

import LandingPage from "./pages/Landing";
import LoginPage from "./pages/Login";
import ProjectPage from "./pages/Project";
import UploadPage from "./pages/Upload";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/login" component={LoginPage} />
        <PrivateRoute exact path="/projects/new" component={UploadPage} />
        <Route exact path="/projects/:projectId" component={ProjectPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
