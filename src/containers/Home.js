import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Card from "../components/Card.js";

const Home = () => {
  const [cards, setCards] = useState([]);

  const fetchData = async () => {
    const response = await axios.get("http://localhost:4000/shop/readall");
    console.log(response.data);
    setCards(response.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="main-hero">
        <div className="hero">
          <input className="input" placeholder="Shop name"></input>
        </div>
      </div>

      {/* effet wave bas de background-image : */}
      <div className="wave">
        <svg
          id="Layer_1"
          data-name="Layer 1"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1366.5 217.5"
          preserveAspectRatio="xMaxYMax meet"
        >
          <path
            className="cls-1"
            d="M0,601a1849.2,1849.2,0,0,1,370-47c246.77-6.15,360,41.14,613,38,95.54-1.19,226.52-9.76,383-42q-.26,108.75-.5,217.5H-.5Z"
            transform="translate(0.5 -550)"
          ></path>
        </svg>
      </div>
      <div className="container-home">
        <div className="wrapper">
          <span className="wrapper-title">Nos coups de coeur</span>
          <div className="slides-shop">
            {cards.map((card, index) => {
              // Ici le spread va transmettre tout le contenu de `cards` en tant que props au composant card

              return <Card key={card.id} {...card} />;
            })}
          </div>
          <span className="wrapper-title">Nos nouvelles adresses Shopping</span>
          <div className="slides-shop">
            {cards.map((card, index) => {
              // Ici le spread va transmettre tout le contenu de `cards` en tant que props au composant card

              return <Card key={card.id} {...card} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
