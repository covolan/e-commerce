import React from "react";
import "./Breadcrum.css";

function Breadcrum(props) {
  const { product } = props;
    const category = captalizeWord(product.category);
    const name = captalizeWord(product.productName);

  return (
    <div className="breadcrum">
      Products &gt; {category} &gt; {name}
    </div>
  );
}

function captalizeWord (word) {
    let tempWord = word.charAt(0).toUpperCase() + word.slice(1)
    return tempWord;
}

export default Breadcrum;
