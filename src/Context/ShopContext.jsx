import React, { createContext } from "react";
import productData from "../Components/assets/data";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const contextValue = { productData };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
