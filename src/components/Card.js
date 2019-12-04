import React from "react";
import { Link } from "react-router-dom";

const Card = props => {
  return (
    <>
      <Link className="link" to={"/shop"}>
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
              <div className="container-stars">
                <span className="icon-star-full"></span>
                <span className="icon-star-full"></span>
                <span className="icon-star-full"></span>
                <span className="icon-star-full"></span>
                <span className="icon-star-full1"></span>
              </div>
            </div>
            <span className="description-slide-shop">{props.description}</span>
          </div>
        </div>
      </Link>
    </>
  );
};
export default Card;
