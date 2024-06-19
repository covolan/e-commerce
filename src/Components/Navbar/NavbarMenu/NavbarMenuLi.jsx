import React, { useContext } from "react";
import { MenuContext } from "../../../Context/MenuContext";

function NavbarMenuLi({ optionName }) {
  const [selectedMenu, setSelectedMenu] = useContext(MenuContext);
  return (
    <>
      <li
        className={selectedMenu == optionName ? "selected-border-bottom" : ""}
        onClick={() => {
          setSelectedMenu(optionName);
        }}
      >
        {optionName.charAt(0).toUpperCase() + optionName.slice(1)}
      </li>
    </>
  );
}

export default NavbarMenuLi;
