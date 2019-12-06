import React from "react";

//props récupérée de Header :
const Dropdown = props => {
  return (
    <>
      <div className="dropdown-container">
        <div class="dropdown">
          <div class="menu-liste-deroulante">{props.mainTitle}</div>
          <div class="dropdown-child">
            <span>{props.category1}</span>
            <span>{props.category2}</span>
            <span>{props.category3}</span>
            <span>{props.category4}</span>
            <span>{props.category5}</span>
            <span>{props.category6}</span>
          </div>
        </div>
      </div>
    </>
  );
};
export default Dropdown;
