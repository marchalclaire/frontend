import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Shop_1 from "../shop_3.jpg";
import Reviews from "../reviews.jpg";

const Shop = () => {
  return (
    <>
      <div className="shop-top">
        <div className="wrapper-shop">
          <div className="main-container-shop">
            <div className="container-left-shop">
              <span className="shop-title">L'appartement</span>
              <span className="shop-category">Creative Shop in Paris</span>
            </div>

            <div className="container-right-shop">
              <span className="shop-update">Update</span>
              <span className="shop-category">Add to favorite</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container-home">
        <div className="wrapper-shop">
          <div className="main-container-shop">
            <div className="container-left-shop">
              <img className="img-shop" src={Shop_1} alt={Shop_1}></img>
              <span className="shop-reviews">3 reviews</span>
              <div className="container-stars">
                <span className="icon-star-full"></span>
                <span className="icon-star-full"></span>
                <span className="icon-star-full"></span>
                <span className="icon-star-full"></span>
                <span className="icon-star-full1"></span>
              </div>
              <span className="shop-descritpion">
                Un showroom lumineux ouvert à tous pour découvrir, essayer et
                commander. Et si on trouvera sur les cintres les deux
                collections de la griffe (automne/hiver et printemps/été) dans
                toutes les tailles, les clientes pourront également découvrir en
                exclusivité les éphémères et très prisées collections capsule
                (disponibles chaque mois en édition limitée) dans un coin dédié,
                un « mur » au fond du magasin. Mais si on peut scruter le
                vestiaire Sézane, de la besace aux bottines, il n'est pas
                question pour autant de repartir avec son butin. «
                L'appartement, c'est une boutique connectée, ajoute Margaux.
                Pour Morgane, il était essentiel de conserver l'aspect digital
                de la griffe.
              </span>
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
