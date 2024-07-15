import React, { useContext, useEffect, useState } from "react";
import "./CSS/ProductsCategory.css";
import { ShopContext } from "../Context/ShopContext";
import Item from "../Components/Item/Item";
import Pagination from "@mui/material/Pagination";
import HeroGaming from "../Components/Hero/HeroGaming";
import HeroOffice from "../Components/Hero/HeroOffice";
import { Menu, MenuItem } from "@mui/material";

function ProductsCategory(props) {
  const { productData } = useContext(ShopContext);

  // States
  const [products, setProducts] = useState(
    productData.slice().filter((prod) => prod.category == props.category)
  );
  const [displayProd, setDisplayProd] = useState([]);
  const [page, setPage] = useState(1);
  const [menuAnchor, setMenuAnchor] = useState(null);

  // Constants
  const PRODUCTS_PER_PAGE = 4;
  const QUANTITY_OF_PAGES = Math.ceil(products.length / PRODUCTS_PER_PAGE);
  const open = Boolean(menuAnchor);

  // Functions
  const handlePageChange = (event, value) => {
    if (value == page) return;
    const totalItems = PRODUCTS_PER_PAGE * value;
    setDisplayProd(products.slice(totalItems - PRODUCTS_PER_PAGE, totalItems));
    setPage(value);
  };

  useEffect(() => {
    setPage(1);
    setProducts(() =>
      productData.slice().filter((prod) => prod.category == props.category)
    );
    setDisplayProd(products.slice(0, PRODUCTS_PER_PAGE));
  }, [props.category]);

  useEffect(() => {
    setPage(1);
    setDisplayProd(products.slice(0, PRODUCTS_PER_PAGE));
  }, [products]);

  const filterAlphabet = () => {
    let tmpProd = products.slice();
    tmpProd.sort((itemA, itemB) => {
      if (itemA.productName > itemB.productName) {
        return 1;
      }
      if (itemA.productName < itemB.productName) {
        return -1;
      }
      return 0;
    });
    setProducts(tmpProd);
  };

  const filterPrice = (order) => {
    let tmpProd = products.slice();
    switch (order) {
      case "smaller":
        tmpProd.sort((itemA, itemB) => itemA.price - itemB.price);
        break;
      case "larger":
        tmpProd.sort((itemA, itemB) => itemB.price - itemA.price);
        break;
    }
    setProducts(tmpProd);
  };

  const handleMenuClick = (event) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setMenuAnchor(null);
  };

  // Main component
  return (
    <div className="category">
      {props.category == "gaming" ? <HeroGaming /> : <HeroOffice />}

      <div className="category-header">
        <p className="category-header-show">
          Showing {displayProd.length} out of {products.length} products
        </p>
        <button
          onClick={(event) => handleMenuClick(event)}
          className="category-header-btn"
        >
          Sort by
        </button>
        <FilterMenu
          open={open}
          handleCloseMenu={handleCloseMenu}
          menuAnchor={menuAnchor}
          filterPrice={filterPrice}
          filterAlphabet={filterAlphabet}
        />
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

// Menu subcomponent
function FilterMenu({
  open,
  handleCloseMenu,
  menuAnchor,
  filterPrice,
  filterAlphabet,
}) {
  const styleProp = {
    px: 4,
    py: 1,
  };

  return (
    <Menu open={open} onClose={handleCloseMenu} anchorEl={menuAnchor}>
      <MenuItem
        sx={styleProp}
        onClick={() => {
          handleCloseMenu();
          filterAlphabet();
        }}
      >
        Alphabetical
      </MenuItem>
      <MenuItem
        sx={styleProp}
        onClick={() => {
          handleCloseMenu();
          filterPrice("smaller");
        }}
      >
        Smaller Price
      </MenuItem>
      <MenuItem
        sx={styleProp}
        onClick={() => {
          handleCloseMenu();
          filterPrice("larger");
        }}
      >
        Larger Price
      </MenuItem>
    </Menu>
  );
}

export default ProductsCategory;
