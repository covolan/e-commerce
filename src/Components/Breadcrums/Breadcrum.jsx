import React from "react";
import "./Breadcrum.css";
import { Link } from "react-router-dom";

function Breadcrum(props) {
  const { product } = props;
  const category = captalizeWord(product.category);
  const name = captalizeWord(product.productName);

  return (
    <div className="breadcrum">
      Products &gt;{" "}
      {
        <Link
          style={{ textDecoration: "inherit", color: "inherit" }}
          to={`/${product.category}`}
        >
          {category}
        </Link>
      }{" "}
      &gt; {name}
    </div>
  );
}

function captalizeWord(word) {
  let tempWord = word.charAt(0).toUpperCase() + word.slice(1);
  return tempWord;
}

export default Breadcrum;
