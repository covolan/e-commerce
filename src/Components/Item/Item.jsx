import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

function Item(props) {
  return (
    <div className="itemDiv">
      <Link
        to={`/product/${props.id}`}
        style={{ textDecoration: "inherit", color: "inherit" }}
      >
        <img src={props.image} alt="" />
      </Link>
      <div className="itemDiv-description">
        <h2>{props.productName}</h2>
        <p>${props.price}</p>
      </div>
    </div>
  );
}

export default Item;
