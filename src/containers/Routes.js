import { Switch, Route, Redirect } from "react-router-dom";
import { Home } from "../pages/Home";
import { TravelMore } from "../pages/TravelMore";
import { Bicycle } from "../pages/Bicycle";
import { Marvel } from "../pages/Marvel";
import { Resume } from "../pages/Resume";
import React from "react";

export const Routes = () => {
  return (
    <Switch>
      <Route component={Home} path="/" exact />
      <Route component={Resume} path="/resume" exact />
      <Route component={Marvel} path="/marvel" exact />
      <Route component={Bicycle} path="/bicycle" exact />
      <Route component={TravelMore} path="/travelMore" exact />
      <Route render={() => <Redirect to="/" />} />
    </Switch>
  );
};
