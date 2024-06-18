import React from "react";
import "./Popular.css";
import productData from "../assets/data";
import Item from "../Item/Item";

function Popular() {
  return (
    <div className="popular">
      <h1>Popular in Office</h1>
      <hr />
      <div className="popular-products">
        {productData.map((product, index) => {
          return (
            <Item
              id={product.id}
              key={index}
              image={product.image}
              productName={product.productName}
              price={product.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Popular;
