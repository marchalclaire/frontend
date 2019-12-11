import React, { useState, useEffect } from "react";
import axios from "axios";
// import User from "../user_1.jpg";

const Profile = () => {
  const [user, setUser] = useState({});

  const fetchData = async () => {
    const response = await axios.get(
      "http://localhost:4000/user/read?id=5df11c6768259764e649e6af" //URL idem postman
    );
    setUser(response.data);
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
            <div className="container-left-user">
              <span className="shop-title">Mon Profile</span>
            </div>

            <div className="container-right-shop">
              <div className="update-container">
                <span className="icon-pencil2"></span>
                <span className="shop-update">Update</span>
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
                className="photo-user"
                src={user.photoUser}
                alt={user.photoUser}
              ></img>
            </div>
            <div className="container-main-right-user">
              <div className="user-infos-container">
                <span className="title-username">
                  Bonjour {user.username} !
                </span>
              </div>
              <div className="container-right-user">
                <div className="user-infos-container-left">
                  <span className="text-user">Email:</span>
                  <span className="text-user">Prénom:</span>
                  <span className="text-user">Nom:</span>
                  <span className="text-user">Ville:</span>
                  {/* <span className="text-user">Année de naissance:</span> */}
                </div>
                <div className="user-infos-container-right">
                  <span className="text-user1">{user.email}</span>
                  <span className="text-user1">{user.name}</span>
                  <span className="text-user1">{user.surname}</span>
                  <span className="text-user1">{user.cityUser}</span>
                  {/* <span className="text-user">Année de naissance:</span> */}
                </div>
              </div>
            </div>
          </div>
          <span>Mes commentaires:</span>
          <span>Mes favoris:</span>
        </div>
      </div>
    </>
  );
};
export default Profile;
