import React from "react";

function HeroComponentButton({ children, color }) {
  return <button className={color}>{children}</button>;
}

export default HeroComponentButton;
