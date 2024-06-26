import React, { useContext, useEffect, useState } from "react";
import "./CSS/ProductsCategory.css";
import { ShopContext } from "../Context/ShopContext";
import Item from "../Components/Item/Item";
import Pagination from "@mui/material/Pagination";

function ProductsCategory(props) {
  const { productData } = useContext(ShopContext);
  const products = productData.filter(
    (prod) => prod.category == props.category
  );
  const PRODUCTS_PER_PAGE = 4
;
  const QUANTITY_OF_PAGES = Math.ceil(products.length / PRODUCTS_PER_PAGE);
  const [displayProd, setDisplayProd] = useState(
    products.slice(0, PRODUCTS_PER_PAGE)
  );
  const [page, setPage] = useState(1);

  const handlePageChange = (event, value) => {
    if (value == page) {
      return;
    }
    setPage(value);
    const totalItems = PRODUCTS_PER_PAGE * value;
    setDisplayProd(products.slice(totalItems - PRODUCTS_PER_PAGE, totalItems));
  };

  useEffect(() => {
    setPage(1);
    setDisplayProd(products.slice(0, PRODUCTS_PER_PAGE));
  }, [props.category]);

  // TODO: Create API to add products

  return (
    <div className="category">
      <div className="category-header">
        <p>
          Showing {displayProd.length} out of {products.length} products
        </p>
        <button>Sort by</button>
      </div>
      <div className="category-products">
        {displayProd.map((item, index) => {
          return (
            <Item key={index + item.productName + Date()} product={item} />
          );
        })}
      </div>
      <div className="pagination">
        <Pagination
          count={QUANTITY_OF_PAGES}
          onChange={handlePageChange}
          page={page}
          shape="rounded"
        />
      </div>
    </div>
  );
}

export default ProductsCategory;
