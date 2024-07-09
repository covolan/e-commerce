import React, { useContext, useState } from "react";
import "./ProductDisplay.css";
import { ShopContext } from "../../Context/ShopContext";
import Rating from "@mui/material/Rating";
import CommentSection from "./CommentSection";

function ProductDisplay(props) {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);

  const [mainImage, setMainImage] = useState(product.image[0]);
  const [popUpBuy, setPopUpBuy] = useState();

  const handleMultipleFunctionsClick = (productID) => {
    addToCart(productID);
    handlePopDisplay();
  };

  const handlePopDisplay = () => {
    setPopUpBuy(
      <p className="pop-up-buy slide-in-left">Product added to cart!</p>
    );
    setTimeout(() => {
      setPopUpBuy();
    }, 1500);
  };

  const handleImageClick = (imageIndex) => {
    setMainImage(product.image[imageIndex]);
  };

  const handleProduductDescription = (description) => {
    let tempDescription = description.split("\n");
    return tempDescription;
  };

  const imageIndexList = [0, 1, 2, 3];

  return (
    <div className="productDisplay">
      <div className="productDisplay-left">
        <div className="side-images">
          {imageIndexList.map((index) => {
            return product.image[index] == undefined ? (
              <div
                key={index + product.image}
                className="placeholder-div"
              ></div>
            ) : (
              <img
                key={product.image[index]}
                onClick={() => {
                  handleImageClick(index);
                }}
                className="secondary-image"
                src={product.image[index]}
                alt=""
              />
            );
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
        <div className="productDisplay-description">
          {handleProduductDescription(product.description).map(
            (item, index) => {
              return (
                <p
                  className="productDisplay-description-text"
                  key={item[0] + index}
                >
                  {item}
                </p>
              );
            }
          )}
        </div>
        {popUpBuy}
        <button
          onClick={() => {
            handleMultipleFunctionsClick(product.id);
          }}
          className="productDisplay-cartBtn"
        >
          ADD TO CART
        </button>
      </div>
      <CommentSection />
    </div>
  );
}

export default ProductDisplay;
