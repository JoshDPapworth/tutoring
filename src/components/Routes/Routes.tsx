import * as React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import { Loading } from "../Loading/Loading";
import AboutMe from "../AboutMe/AboutMe";

const Home = React.lazy((): Promise<any> => import(/* webpackChunkName: "home" */ "../Home/Home"));

function Routes(): Router {
  return (
    <div className="container main">
      <Router>
        <Navigation />

        <React.Suspense fallback={<Loading />}>
          <Switch>
            <Route exact={true} path="/home" component={Home} />
            <Route exact={true} path="/about-me" component={AboutMe} />
          </Switch>
        </React.Suspense>
      </Router>
    </div>
  );
}

export default Routes;
