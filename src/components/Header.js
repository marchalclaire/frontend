import React from "react";
import Logo from "../logo.jpg";
import { Link } from "react-router-dom";
import "../App.css";
import Dropdown from "../components/Dropdown.js";

const Header = () => {
  return (
    <>
      <div className="container-main">
        <div className="container-left">
          <Link to={"/home"}>
            <img className="logo" src={Logo} alt={Logo}></img>
          </Link>
          {/* on appel le composant lisgte déroulante Dropdown auquel on passe la props title : */}
          <Dropdown
            mainTitle="Shop by Category"
            category1="Casual"
            category2="Creative"
            category3="luxury"
            category4="Street-Wear"
            category5="Accessories"
            category6="Jewels"
          ></Dropdown>
          <Dropdown
            mainTitle="Choose your City"
            category1="Paris"
            category2="London"
            category3="Bruxelles"
            category4="Berlin"
            category5="Madrid"
            category6="Rome"
          ></Dropdown>
        </div>
        <div className="container-right">
          <svg
            className="icone-profile"
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 512 512"
            fill="rgba(122, 114, 114, 0.438)"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M256 256c52.805 0 96-43.201 96-96s-43.195-96-96-96-96 43.201-96 96 43.195 96 96 96zm0 48c-63.598 0-192 32.402-192 96v48h384v-48c0-63.598-128.402-96-192-96z" />
          </svg>

          <span className="header-title-right">My Profile</span>
        </div>
        <span className="header-title-right_1">login / Join</span>
      </div>
      <div className="header-underline"></div>
    </>
  );
};
export default Header;
