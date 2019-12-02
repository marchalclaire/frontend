import React from "react";
import { Link } from "react-router-dom";
// import Item from "../components/Item.js";

const Shops = () => {
  return (
    <>
      <h1>Bienvenue sur la page Shops !!</h1>
      <Link to={"/shop"}>
        <span>Lien vers shop</span>
      </Link>
    </>
  );
};
export default Shops;
