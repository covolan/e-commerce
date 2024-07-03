import React from "react";

function HeroComponentRight({ imgSrc, bgDivClassName }) {
  return (
    <div className="hero-right">
      <div className={`fade-in-top ${bgDivClassName}`}></div>
      <img src={imgSrc} className="phone-img" alt="" />
    </div>
  );
}

export default HeroComponentRight;
