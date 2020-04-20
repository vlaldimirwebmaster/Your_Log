import React from "react";
import { Switch, Route } from "react-router-dom";

import { Home } from "./scenes/home/index";
import { Account } from "./scenes/account";
import { AddFood } from "./scenes/AddFood";

export const MyRouter = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/health/home">
          <Home />
        </Route>
        <Route path="/health/account">
          <Account />
        </Route>
        <Route path="/health/statistics">
          <span>Statistics</span>
        </Route>
        <Route path="/health/addfood">
          <AddFood />
        </Route>
        <Route path="/health/knowledgebase">
          <span>Knowledge base</span>
        </Route>
      </Switch>
    </div>
  );
};
