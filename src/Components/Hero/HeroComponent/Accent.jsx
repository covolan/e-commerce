import React from "react";

function Accent({ children, addClass }) {
  return <span className={`accent ${addClass}`}>{children}</span>;
}

export default Accent;
