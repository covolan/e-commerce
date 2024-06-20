import React from "react";

function HeroComponentRoot({ children }) {
  return (
    <div className="hero">
      <div className="hero-content">{children}</div>
    </div>
  );
}

export default HeroComponentRoot;
