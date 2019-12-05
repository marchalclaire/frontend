import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Card from "../components/Card.js";

const Shops = () => {
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
      <div className="shop-top">
        <div className="wrapper-shop">
          <div className="main-container-shop">
            <div className="container-left-shops">
              <span className="shop-title">Nos coups de coeurs</span>
              <span className="icon-heart1"></span>
            </div>
          </div>
        </div>
      </div>
      <div className="container-home">
        <div className="wrapper">
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
export default Shops;
