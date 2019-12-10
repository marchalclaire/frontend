import React from "react";
import { Link } from "react-router-dom";

//props transmises par le container HOME :
const Card = props => {
  return (
    <>
      {/* props.city = value (indiqué dans URL App.js), infos qu'on envoie à Shops */}
      <Link className="link" to={"/shops/shopsbycity/" + props.city}>
        <div className="slide-shop">
          <img
            className="img-slide-shop"
            src={props.photoCity}
            alt={props.photoCity}
          ></img>
          <div className="text-slide-shop">
            <span className="title-slide-shop">{props.city}</span>
          </div>
        </div>
      </Link>
    </>
  );
};
export default Card;
