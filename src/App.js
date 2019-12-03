import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./containers/Home";
import Shops from "./containers/Shops";
import Shop from "./containers/Shop";
import Header from "./components/Header";
// import Cookie from "js-cookie";

const App = () => {
  return (
    <Router>
      <Header></Header>
      {/* <LogIn></LogIn> */}

      <Switch>
        <Route path="/user/profile/:identifiant"></Route>

        <Route path="/user/register"></Route>

        {/* <Route path="/shop/:identifiant"> */}
        <Route path="/shop">
          <Shop />
        </Route>

        <Route path="/shops">
          <Shops />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
      {/* <Footer></Footer> */}
    </Router>
  );
};
export default App;
