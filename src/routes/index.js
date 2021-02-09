import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "./Home";
import OrderOnline from "./OrderOnline";
import Reviews from "./Reviews";
import CustomizeBox from "./CustomizeBox";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/order-online">
          <OrderOnline />
        </Route>
        <Route path="/reviews" exact component={Reviews} />
        <Route path="/customize-box" exact component={CustomizeBox} />
        <Route path="*">
          <Redirect to="/order-online" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
export default Routes;
