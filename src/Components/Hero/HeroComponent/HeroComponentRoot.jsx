import React from "react";

function HeroComponentRoot({ children, heroBg }) {
  return (
    <div className={`hero ${heroBg}`}>
      <div className="hero-content fade-in-top">{children}</div>
    </div>
  );
}

export default HeroComponentRoot;
