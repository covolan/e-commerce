import React from "react";
import "./ProductDisplay.css";

function ProductDisplay(props) {
  const { product } = props;

  return (
    <div className="productDisplay">
      <div className="productDisplay-left">
        <div className="side-images">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="main-image">
          <img src={product.image} alt="" />
        </div>
      </div>
      <div className="productDisplay-right">
        <h1 className="productDisplay-title">{product.productName}</h1>
        <p className="productDisplay-rating">* * * * *</p>
        <p className="productDisplay-price">${product.price}</p>
        <p className="productDisplay-description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          eius nobis quidem enim dolorum est, tenetur, quaerat ducimus optio
          voluptate reiciendis, pariatur eveniet non fugiat nihil provident
          fugit qui soluta.
        </p>
        <button className="productDisplay-cartBtn">ADD TO CART</button>
      </div>
    </div>
  );
}

export default ProductDisplay;
