import React from "react";
import { Link } from "react-router-dom";
import Hero from "../hero.jpg";
// import Item from "../components/Item.js";

const Home = () => {
  return (
    <>
    
      <div className="hero">
      
      <input
            className="input"
            placeholder="Shop name"
          ></input>
      </div>
      {/* effet wave bas de background-image : */}
      <div className="wave">
    <svg id="Layer_1" data-name="Layer 1" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1366.5 217.5" preserveAspectRatio="xMaxYMax meet">
        <path className="cls-1" d="M0,601a1849.2,1849.2,0,0,1,370-47c246.77-6.15,360,41.14,613,38,95.54-1.19,226.52-9.76,383-42q-.26,108.75-.5,217.5H-.5Z" transform="translate(0.5 -550)"></path>
    </svg>
</div>
<div className="container-home">
      <div className="wrapper">
<span className="wrapper-title">Nos coups de coeur</span>
      </div>
      </div>
      <h1>Bienvenue sur la page Home !!</h1>
      <Link to={"/shops"}>
        <span>Lien vers shops</span>
      </Link>
    </>
  );
};
export default Home;
