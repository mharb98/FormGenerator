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
          <Route exact path="/" component={Form} />
    </Switch>
  </Router>
);