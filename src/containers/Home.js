import React from "react";
import { Link } from "react-router-dom";
import Hero from "../hero.jpg";
// import Item from "../components/Item.js";

const Home = () => {
  return (
    <>
      <div className="hero">
        <img className="hero-img" src={Hero} alt={Hero}></img>
      </div>
      <h1>Bienvenue sur la page Home !!</h1>
      <Link to={"/shops"}>
        <span>Lien vers shops</span>
      </Link>
    </>
  );
};
export default Home;
