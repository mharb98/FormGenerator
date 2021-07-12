import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import Profile from "../components/Profile";
import Form from "../components/Form";

export default (
  <Router>
    <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/profile" component={Profile} />
          <Route path = "/form/:formName" component={Form} />
    </Switch>
  </Router>
);