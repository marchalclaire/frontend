import React from "react";
import Logo from "../logo.jpg";
import { Link } from "react-router-dom";
import "../App.css";

const Header = () => {
  return (
    <>
      <div className="container-main">
        <div className="container-left">
          <Link to={"/home"}>
            <img className="logo" src={Logo} alt={Logo}></img>
          </Link>
          <span className="header-title">Shop by Category</span>
          <span className="header-title">Choose your City</span>
        </div>
        <div className="container-right">
          <span className="header-title-right">My Profile</span>
          <span className="header-title-right_1">login / Join</span>
        </div>
      </div>
      <div className="header-underline"></div>
    </>
  );
};
export default Header;
