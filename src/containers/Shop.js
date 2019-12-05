import React, { useState, useEffect } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "../App.css";

const Shop = () => {
  const params = useParams();
  const [card, setCard] = useState([]);

  //pour afficher les étoiles colorées jaune ou gris en fonction de l'averageRating :
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (i < card.averageRating) {
      stars.push(<span className="icon-star-full"></span>);
    } else {
      stars.push(<span className="icon-star-full1"></span>);
    }
  }

  const fetchData = async () => {
    const response = await axios.get(
      "http://localhost:4000/shop/read?id=" + params.identifiant //URL idem postman
    );
    setCard(response.data);
    // console.log(response.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="shop-top">
        <div className="wrapper-shop">
          <div className="main-container-shop">
            <div className="container-left-shop">
              <span className="shop-title">{card.title}</span>
              <span className="shop-category">
                {card.category} in {card.city}
              </span>
            </div>

            <div className="container-right-shop">
              <div className="update-container">
                <span className="icon-pencil2"></span>
                <span className="shop-update">Update</span>
              </div>
              <div className="update-container">
                <span className="icon-heart"></span>
                <span className="shop-favorite">Add to favorite</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-home">
        <div className="wrapper-shop">
          <div className="main-container-shop">
            <div className="container-left-shop">
              <img
                className="img-shop"
                src={card.photos}
                alt={card.photos}
              ></img>
              <span className="shop-reviews">3 reviews</span>
              <div className="container-stars">{stars}</div>
              <span className="shop-descritpion">{card.description}</span>
            </div>
            <div className="container-right-shop2">
              <div className="shop-add-reviews-container">
                <span className="shop-add-reviews">Post your review</span>
              </div>
              <div className="shop-list-reviews"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Shop;
