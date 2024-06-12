import React, { useState } from "react";
import "./Navbar.css";
import cartIcon from "../assets/cart-shopping.png";
import { Link } from "react-router-dom";

function Navbar() {
  const [selectedMenu, setSelectedMenu] = useState("products");

  const linkStyle = {
    textDecoration: "none",
  };

  return (
    <div className="navbar">
      <p className="navbar-shopName">Shop-name</p>
      <ul className="navbar-menu">
        <MenuItem
          selectedMenu={selectedMenu}
          setSelectedMenu={setSelectedMenu}
          optionName={"products"}
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
        <MenuItem
          selectedMenu={selectedMenu}
          setSelectedMenu={setSelectedMenu}
          optionName={"home"}
          path={"/home"}
        />
      </ul>
      <div className="navbar-loginAndCart">
        <button>
          <Link
            onClick={() => {
              setSelectedMenu("");
            }}
            style={{ textDecoration: "inherit", color: "inherit" }}
            to="/login"
          >
            Login
          </Link>
        </button>
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
    <li
      className={selectedMenu == optionName ? "selected-border-bottom" : ""}
      onClick={() => {
        setSelectedMenu(optionName);
      }}
    >
      <Link style={{ textDecoration: "inherit", color: "inherit" }} to={path}>
        {optionName.charAt(0).toUpperCase() + optionName.slice(1)}
      </Link>
    </li>
  );
}

export default Navbar;
