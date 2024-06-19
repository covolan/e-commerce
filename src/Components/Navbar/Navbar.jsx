import React, { useContext, useState } from "react";
import "./Navbar.css";
import cartIcon from "../assets/cart-shopping.png";
import { Link } from "react-router-dom";
import { MenuContext } from "../../Context/MenuContext";


function Navbar() {
  const [selectedMenu, setSelectedMenu] = useContext(MenuContext);


  return (
    <div className="navbar">
      <p className="navbar-shopName">Shop-name</p>
      <ul className="navbar-menu">
        <MenuItem
          selectedMenu={selectedMenu}
          setSelectedMenu={setSelectedMenu}
          optionName={"home"}
          path={"/"}
        />
        <MenuItem
          selectedMenu={selectedMenu}
          setSelectedMenu={setSelectedMenu}
          optionName={"gaming"}
          path={"/gaming"}
        />
        <MenuItem
          selectedMenu={selectedMenu}
          setSelectedMenu={setSelectedMenu}
          optionName={"office"}
          path={"/office"}
        />
      </ul>
      <div className="navbar-loginAndCart">
        <Link
          onClick={() => {
            setSelectedMenu("");
          }}
          style={{ textDecoration: "inherit", color: "inherit" }}
          to="/login"
        >
          <button>Login</button>
        </Link>
        <Link
          onClick={() => {
            setSelectedMenu("");
          }}
          style={{ textDecoration: "inherit", color: "inherit" }}
          to="/cart"
        >
          <img src={cartIcon} />
        </Link>
      </div>
    </div>
  );
}

function MenuItem({ selectedMenu, setSelectedMenu, optionName, path }) {
  return (
    <Link style={{ textDecoration: "inherit", color: "inherit" }} to={path}>
      <li
        className={selectedMenu == optionName ? "selected-border-bottom" : ""}
        onClick={() => {
          setSelectedMenu(optionName);
        }}
      >
        {optionName.charAt(0).toUpperCase() + optionName.slice(1)}
      </li>
    </Link>
  );
}

export default Navbar;
