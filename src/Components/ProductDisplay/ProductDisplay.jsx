import React, { useContext } from "react";
import "./ProductDisplay.css";
import { ShopContext } from "../../Context/ShopContext";
import Rating from "@mui/material/Rating"

function ProductDisplay(props) {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);

  console.log(product)

  return (
    <div className="productDisplay">
      <div className="productDisplay-left">
        <div className="side-images">
          <img src={product.image[0]} alt="" />
          <img src={product.image[1]} alt="" />
          <img src={product.image[2]} alt="" />
          <img src={product.image[3]} alt="" />
        </div>
        <div className="main-image">
          <img src={product.image[0]} alt="" />
        </div>
      </div>
      <div className="productDisplay-right">
        <h1 className="productDisplay-title">{product.productName}</h1>
        <Rating name="rating" value={product.rating} readOnly></Rating>
        <p className="productDisplay-price">${product.price}</p>
        <p className="productDisplay-description">
          {product.description}
        </p>
        <button onClick={() => {addToCart(product.id)}} className="productDisplay-cartBtn">ADD TO CART</button>
      </div>
    </div>
  );
}

export default ProductDisplay;
