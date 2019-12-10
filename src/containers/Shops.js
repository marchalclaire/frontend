import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Card from "../components/Card.js";
import { useParams } from "react-router-dom";

const Shops = () => {
  //on récupère les paramètres query de l'url de la page (pour savoir sur quelle page on est et faire les bons filtres)
  const params = useParams();
  const [cards, setCards] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); //état pour pagination

  //on passe le paramètre "page" pour éviter désyncro de l'état:
  const fetchData = async page => {
    //on crée un obj vide contenant les paramètres à envoyer au back :
    let requestParams = {};
    let limit = 3;

    //j'ajoute la clé "limit" à l'objet avant de l'envoyer au back (clé necessaire à la pagination):
    requestParams.limit = limit;

    let skip = 0;

    if (page === 1) {
      skip = 0;
    } else {
      skip = limit * (page - 1);
    }

    //j'ajoute la clé "skip" à l'objet avant de l'envoyer au back (clé necessaire à la pagination):
    requestParams.skip = skip;

    if (params.type === "coupdecoeur") {
      requestParams.averageRating = 4; //envoie 4 au backend qui lui fera des conditions et filtrera affichage à >= 4.
    } else if (params.type === "shopsbycity") {
      //value créée dans route App.js
      if (params.value) {
        requestParams.city = params.value; //on ajoute la clé city à l'objet "requestParams" et on envoie au back la valeur de la clé "city" qui est = à value (si clic sur Paris, value=Paris...)
      }
    }

    const response = await axios.post(
      "http://localhost:4000/shop/findshops",
      //j'envoie les paramètres définis au dessus au back:
      requestParams
    );
    // console.log(response.data);
    setCards(response.data);
  };
  useEffect(() => {
    fetchData(1);
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
      <div className="container-pagination">
        <button
          className="button-pagination"
          // si on est sur page 1, bouton "disabled" (a sa propre css, bouton grisé et désactivé, mais il faut ajouter la classe "button :disabled " dans App.css )
          disabled={currentPage === 1}
          onClick={() => {
            fetchData(currentPage - 1); // on passe ce paramètre "currentPage - 1", car soucis car désyncro entre état de currentPage et la vrai page en cours.
            setCurrentPage(currentPage - 1); //on set l'état pour affichage de la page en cours (pagination)
          }}
        >
          page précédente
        </button>
        <span>{currentPage}</span>
        <button
          className="button-pagination"
          onClick={() => {
            fetchData(currentPage + 1);
            setCurrentPage(currentPage + 1);
          }}
        >
          page suivante
        </button>
      </div>
    </>
  );
};
export default Shops;
