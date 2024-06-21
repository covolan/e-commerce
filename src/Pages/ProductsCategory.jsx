import React, { useContext } from "react";
import "./CSS/ProductsCategory.css";
import { ShopContext } from "../Context/ShopContext";
import Item from "../Components/Item/Item";

function ProductsCategory(props) {
  const { productData } = useContext(ShopContext);
  return (
    <div className="category">
      <div className="category-header">
        <p>Showing n out of N products</p>
        <button>Sort by</button>
      </div>
      {productData.map((item, index) => {
        if (props.category == item.category) {
          return (
            <Item
              key={index}
              id={item.id}
              image={item.image}
              productName={item.productName}
              price={item.price}
              prevPrice={item.prevPrice}
            />
          );
        }
        return null;
      })}
    </div>
  );
}

export default ProductsCategory;
