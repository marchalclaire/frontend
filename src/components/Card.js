import React from "react";
import { Link } from "react-router-dom";
import LinesEllipsis from "react-lines-ellipsis";

//props transmises par le container HOME via l'appel l'AXIOS et .map :
const Card = props => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < props.averageRating) {
      stars.push(<span className="icon-star-full"></span>);
    } else {
      stars.push(<span className="icon-star-full1"></span>);
    }
  }

  return (
    <>
      {/* On ajoute dans la Route "+ props._id" pour passer au clic sur slide-shop dans Shops à Shop gràce à l'identifiant: */}
      <Link className="link" to={"/shop/" + props._id}>
        <div className="slide-shop">
          <img
            className="img-slide-shop"
            src={props.photos}
            alt={props.photos}
          ></img>
          <div className="text-slide-shop">
            <span className="title-slide-shop">{props.title}</span>
            <span className="city-slide-shop">{props.city}</span>
            <div className="reviews-stars-container">
              <span className="reviews-slide-shop">
                {props.averageRating} reviews
              </span>
              <div className="container-stars">{stars}</div>
            </div>

            {/* limiter l'affichage d'un texte, importer en haut ellipsis puis installer (npm install --save react-lines-ellipsis), puis : */}
            <LinesEllipsis
              className="description-slide-shop"
              text={props.description}
              maxLine="3"
              ellipsis="..."
              trimRight
              basedOn="letters"
            ></LinesEllipsis>
          </div>
        </div>
      </Link>
    </>
  );
};
export default Card;
