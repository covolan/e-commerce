import React from "react";

function Accent({ children, addClass, color }) {
  return <span className={`${color} ${addClass}`}>{children}</span>;
}

export default Accent;
