import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Card from "../components/Card.js";
import CardCity from "../components/CardCity.js";
import London from "../london.jpg";
import Paris from "../paris.png";
import Bruxelles from "../bruxelles.jpg";

const Home = () => {
  const [cards, setCards] = useState([]);

  const fetchData = async () => {
    //appel au back d'une reuête paginée à 3 article par page:
    const response = await axios.post("http://localhost:4000/shop/findshops", {
      limit: 3,
      averageRating: 4
    });
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
          <div className="wrapper-container">
            <div className="wrapper-title-container">
              <span className="wrapper-title">Nos coups de coeur</span>
              <span className="icon-heart1"></span>
            </div>
            {/* on ajoute coup de coeur au lien pour déclencher le filtre, on donne la valeur "all" à "value", voir détail route dans App.js */}
            <Link className="link" to={"/shops/coupdecoeur/all"}>
              <span className="wrapper-title">view all</span>
            </Link>
          </div>
          <div className="slides-shop">
            {cards.map((card, index) => {
              // Ici le spread va transmettre tout le contenu de `cards` en tant que props au composant card

              return <Card key={card.id} {...card} />;
            })}
          </div>
          <div className="wrapper-container">
            <span className="wrapper-title">
              Nos adresses Shopping par ville
            </span>
          </div>
          {/* <Link className="link" to={"/shops/shopsbycity/" + props.city}> */}

          <div className="slides-shop">
            <CardCity photoCity={London} city="Londres"></CardCity>
            <CardCity photoCity={Paris} city="Paris"></CardCity>
            <CardCity photoCity={Bruxelles} city="Bruxelles"></CardCity>
          </div>
          {/* </Link>  */}
        </div>
      </div>
    </>
  );
};
export default Home;
