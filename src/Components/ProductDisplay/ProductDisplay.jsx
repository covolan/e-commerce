import React, { useContext, useState } from "react";
import "./ProductDisplay.css";
import { ShopContext } from "../../Context/ShopContext";
import Rating from "@mui/material/Rating";

function ProductDisplay(props) {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);

  const [mainImage, setMainImage] = useState(product.image[0]);

  const handleImageClick = (imageIndex) => {
    setMainImage(product.image[imageIndex]);
  };

  const imageIndexList = [0, 1, 2, 3];

  return (
    <div className="productDisplay">
      <div className="productDisplay-left">
        <div className="side-images">
          {imageIndexList.map((index) => {
            return(
              product.image[index] == undefined ? <div className="placeholder-div"></div> : 
              <img key={product.image[index]}
              onClick={() => {
                handleImageClick(index);
              }}
              className="secondary-image"
              src={product.image[index]}
              alt=""
            />
            )
          })}
        </div>
        <div>
          <img className="main-image" src={mainImage} alt="" />
        </div>
      </div>
      <div className="productDisplay-right">
        <h1 className="productDisplay-title">{product.productName}</h1>
        <Rating name="rating" value={product.rating} readOnly></Rating>
        <p className="productDisplay-price">${product.price}</p>
        <p className="productDisplay-description">{product.description}</p>
        <button
          onClick={() => {
            addToCart(product.id);
          }}
          className="productDisplay-cartBtn"
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
}

export default ProductDisplay;
