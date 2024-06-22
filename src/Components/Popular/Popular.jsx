import React from "react";
import "./Popular.css";
import productData from "../assets/data";
import Item from "../Item/Item";

function Popular() {
  return (
    <div className="popular">
      <h1 className="popular-title">Popular in Office</h1>
      <hr />
      <div className="popular-products">
        {productData.map((product, index) => {
          return (
            <Item
            key={index}
            product={product}
            />
          );
        })}
        {productData.map((product, index) => {
          return (
            <Item
            key={index}
            product={product}
            />
          );
        })}
        {productData.map((product, index) => {
          return (
            <Item
            key={index}
            product={product}
            />
          );
        })}
                {productData.map((product, index) => {
          return (
            <Item
            key={index}
            product={product}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Popular;
