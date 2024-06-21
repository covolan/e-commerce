import React, { useContext } from "react";
import "./Item.css";
import { Link } from "react-router-dom";
import { MenuContext } from "../../Context/MenuContext";

function Item({product}) {
  const [selectedMenu, setSelectedMenu] = useContext(MenuContext);

  return (
    <div className="itemDiv">
      <Link
        to={`/product/${product.id}`}
        style={{ textDecoration: "inherit", color: "inherit" }}
      >
        <img onClick={() => setSelectedMenu("")} src={product.image} alt="" />
      </Link>

      <div className="itemDiv-description">
        <h2>{product.productName}</h2>

        <div className="description-price">
          {product.price == "" ? null : (
            <p className="previous-price">${product.prevPrice}</p>
          )}
          <p className="current-price">${product.price}</p>
        </div>
      </div>
    </div>
  );
}

export default Item;
