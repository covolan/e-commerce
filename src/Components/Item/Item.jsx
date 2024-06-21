import React, { useContext } from "react";
import "./Item.css";
import { Link } from "react-router-dom";
import { MenuContext } from "../../Context/MenuContext";

function Item(props) {
  const [selectedMenu, setSelectedMenu] = useContext(MenuContext);

  return (
    <div className="itemDiv">
      <Link
        to={`/product/${props.id}`}
        style={{ textDecoration: "inherit", color: "inherit" }}
      >
        <img onClick={() => setSelectedMenu("")} src={props.image} alt="" />
      </Link>

      <div className="itemDiv-description">
        <h2>{props.productName}</h2>

        <div className="description-price">
          {props.prevPrice == "" ? null : (
            <p className="previous-price">${props.prevPrice}</p>
          )}
          <p className="current-price">${props.price}</p>
        </div>
      </div>
    </div>
  );
}

export default Item;
