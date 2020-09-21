import React from "react";
import "./App.css";
import {
  Route,
  Switch,
  withRouter,
  useLocation,
  Redirect,
} from "react-router-dom";
import Layout from "./hoc/Layout/Layout";
import asyncComponent from "./hoc/asyncComponent/asyncComponent";
import FullPortfolio from "./components/FullPortfolio/FullPortfolio";

const App = (props) => {
  let location = useLocation().pathname;
  let locationName = location.substr(1);
  if (location === "/") {
    locationName = "portfolio";
  }

  const asyncPortfolio = asyncComponent(() => {
    return import("./containers/Portfolio/Portfolio");
  });

  const asyncAbout = asyncComponent(() => {
    return import("./containers/About/About");
  });

  let routes = (
    <Switch>
      <Route path="/bio" exact title="Bio" component={asyncAbout} />
      <Route path="/" title="Home" exact component={asyncPortfolio} />
      <Redirect to="/" />
    </Switch>
  );

  return (
    <React.Fragment>
      <Layout pageTitle={locationName.toUpperCase()}>{routes}</Layout>
    </React.Fragment>
  );
};

export default withRouter(App);
