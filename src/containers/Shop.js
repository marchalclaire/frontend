import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
// import Item from "../components/Item.js";

const Shop = () => {
  return (
    <>
      <div className="shop-top">
        <div className="wrapper-shop">
          <div className="main-container-shop">
            <div className="container-left-shop">
              <span>data.title</span>
              <span>(data.averageRating reviews)</span>
            </div>

            <div className="container-right-shop"></div>
            <span>update</span>
            <span>favorite</span>
          </div>
        </div>
      </div>

      <div className="container-home">
        <div className="wrapper-shop">
          <span>data.city</span>
        </div>
      </div>

      <h1>Bienvenue sur la page Shop !!</h1>
    </>
  );
};
export default Shop;
