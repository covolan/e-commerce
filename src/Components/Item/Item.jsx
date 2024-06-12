import React from "react";
import "./Item.css";

function Item(props) {
  return (
    <div className="itemDiv">
      <img src={props.image} alt="" />
      <div className="itemDiv-description">
        <h2>{props.productName}</h2>
        <p>${props.price}</p>
      </div>
    </div>
  );
}

export default Item;
