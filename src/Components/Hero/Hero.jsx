import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>TEXT TO THE FEATURED PRODUCT</h2>
        <p>
          Description of the product, like information and stuff. Things to get
          the attention of the user
        </p>
        <button>Acess The product</button>
      </div>
      <div className="hero-right">
        <div className="hero-right-imagePlaceholder">
            
        </div>
      </div>
    </div>
  );
}

export default Hero;
