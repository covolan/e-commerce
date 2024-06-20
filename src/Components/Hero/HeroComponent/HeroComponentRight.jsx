import React from "react";

function HeroComponentRight({imgSrc, bgDivClassName}) {
  return (
    <div className="hero-right">
      <div className={bgDivClassName}></div>
      <img src={imgSrc} alt="" />
    </div>
  );
}

export default HeroComponentRight;
