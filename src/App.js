import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./containers/Home";
import Shops from "./containers/Shops";
import Shop from "./containers/Shop";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Profile from "./containers/Profile";
// import Cookie from "js-cookie";

const App = () => {
  return (
    <Router>
      <Header></Header>
      {/* <LogIn></LogIn> */}

      <Switch>
        {/* <Route path="/user/profile/:identifiant"></Route> */}
        <Route path="/user/profile">
          <Profile />
        </Route>
        <Route path="/user/register"></Route>

        {/* ajouter dans Route :identifiant" pour le passage à la page Shop gràce à l'"identifiant" */}
        <Route path="/shop/:identifiant">
          <Shop />
        </Route>
        {/* :type et value permet de filtrer en fonction du bouton sur lequel l'utilisateur a cliqué (affichage shops par coup de coeur, city) */}
        <Route path="/shops/:type/:value">
          <Shops />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
};
export default App;
