import React from "react";
import { Link } from "react-router-dom";

//props transmises par le container HOME :
const Card = props => {
  return (
    <>
      {/* <Link className="link" to={"/shop/" + props._id}> */}
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
      {/* </Link> */}
    </>
  );
};
export default Card;
