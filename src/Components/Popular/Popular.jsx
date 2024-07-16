import React from "react";
import "./Popular.css";
import productData from "../assets/newdata";
import Item from "../Item/Item";

function Popular() {
  const CATEGORY = "Office";

  return (
    <div className="popular">
      <h1 className="popular-title">Popular in {CATEGORY}</h1>
      <hr />
      <div className="popular-products">
        {productData.map((product, index) => {
          if (
            product.category == CATEGORY.toLowerCase() &&
            product.popular == true
          ) {
            return <Item key={index} product={product} />;
          }
        })}
      </div>
    </div>
  );
}

export default Popular;
