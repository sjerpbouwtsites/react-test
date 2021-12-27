import { BrowserRouter, Route, Switch } from "react-router-dom";
import StorePicker from "./StorePicker.js";
import React from "react";
import NotFound from "./NotFound.js";
import App from "./App.js";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={StorePicker} />
      <Route path="/store/:storeId" component={App} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default Router;