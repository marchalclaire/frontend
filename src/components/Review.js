import React, { useState, useEffect } from "react";
import axios from "axios";

//props transmises par le container SHOP via l'appel l'AXIOS et .map :
const Review = props => {
  const [user, setUser] = useState([]);

  const fetchData = async () => {
    const response = await axios.get(
      "http://localhost:4000/user/read?id=5df11c6768259764e649e6af" //URL idem postman
    );
    setUser(response.data);
    // console.log(response.data.email);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < props.rating) {
      stars.push(<span className="icon-star-full"></span>);
    } else {
      stars.push(<span className="icon-star-full1"></span>);
    }
  }

  return (
    <>
      <div className="shop-review">
        <div className="shop-review-user">
          <div className="shop-user-text-comment">{user.username}</div>
          <img
            className="photo-user-review"
            src={user.photoUser}
            alt={user.photoUser}
          ></img>
        </div>

        <div className="shop-rating">{stars}</div>
        <div className="shop-comment">{props.comment}</div>
      </div>
    </>
  );
};
export default Review;
