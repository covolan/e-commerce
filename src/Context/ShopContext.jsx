import React, { createContext, useState } from "react";
import Data from "../Components/assets/newdata";

export const ShopContext = createContext(null);

const productData = Data;

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < productData.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

function ShopContextProvider(props) {
  const addToCart = (itemId) => {
    setCartItems((previousVal) => ({
      ...previousVal,
      [itemId]: previousVal[itemId] + 1,
    }));
  };

  const delFromCart = (itemId) => {
    setCartItems((previousVal) => ({
      ...previousVal,
      [itemId]: previousVal[itemId] - 1,
    }));
  };

  const emptyAllCart = () => {
    setCartItems(getDefaultCart());
  };

  const emptyCartItem = (itemId) => {
    setCartItems((previousVal) => ({ ...previousVal, [itemId]: 0 }));
  };

  const [cartItems, setCartItems] = useState(getDefaultCart());
  const contextValue = {
    productData,
    cartItems,
    addToCart,
    delFromCart,
    emptyCartItem,
    emptyAllCart,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
}

export default ShopContextProvider;
