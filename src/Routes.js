import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Concatenador from "./pages/Concatenador";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Home" component={Home} />
        <Route path="/Concatenador" component={Concatenador} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
