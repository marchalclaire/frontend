import React from "react";
import { Link } from "react-router-dom";

const Card = props => {
  return (
    <>
      <div className="slide-shop">
        <img
          className="img-slide-shop"
          src={props.photos}
          alt={props.photos}
        ></img>
        <div className="text-slide-shop">
          <span className="title-slide-shop">{props.title}</span>
          <span className="city-slide-shop">{props.city}</span>
          <span className="reviews-slide-shop">
            {props.averageRating} reviews
          </span>
          <span className="description-slide-shop">{props.description}</span>
        </div>
      </div>
    </>
  );
};
export default Card;
