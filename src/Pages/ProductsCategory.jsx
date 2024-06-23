import React, { useContext, useState } from "react";
import "./CSS/ProductsCategory.css";
import { ShopContext } from "../Context/ShopContext";
import Item from "../Components/Item/Item";

function ProductsCategory(props) {
  const { productData } = useContext(ShopContext);
  let totalProducts = 0;

  const countTotal = () => {
    productData.map((item) => {
      if (props.category == item.category) {
        totalProducts += 1;
      }
    });
  };

  // TODO: Add pagination with material ui
  // TODO: Create API to add products
  // pagination example: https://hygraph.com/blog/react-pagination

  countTotal();

  return (
    <div className="category">
      <div className="category-header">
        <p>
          Showing {totalProducts} out of {totalProducts} products
        </p>
        <button>Sort by</button>
      </div>
      <div className="category-products">
        {productData.map((item, index) => {
          if (props.category == item.category) {
            return <Item key={index} product={item} />;
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default ProductsCategory;
