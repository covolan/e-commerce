import { IconButton, Menu, MenuItem } from "@mui/material";
import "./Navbar.css";
import { NavbarMenuItem } from "./NavbarMenu";
import MenuIcon from "@mui/icons-material/Menu";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuAnchor, setMenuAnchor] = useState(null);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const open = Boolean(menuAnchor);

  const handleMenuClick = (event) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setMenuAnchor(null);
  };

  return (
    <div className="navbar">
      <div className="navbar-content">
        <p className="navbar-shopName">INFORMATIKA</p>
        {windowSize.width < 768 ? (
          <BarMenu
            open={open}
            handleCloseMenu={handleCloseMenu}
            handleMenuClick={handleMenuClick}
            menuAnchor={menuAnchor}
          />
        ) : (
          <RegularMenu />
        )}
      </div>
    </div>
  );
}

export default Navbar;

const RegularMenu = () => {
  const menuOptions = [
    {
      path: "/",
      optionName: "home",
    },
    {
      path: "/gaming",
      optionName: "gaming",
    },
    {
      path: "/office",
      optionName: "office",
    },
  ];

  return (
    <>
      <ul className="navbar-menu">
        {menuOptions.map((option, index) => {
          return (
            <NavbarMenuItem.Root key={index + option.optionName}>
              <NavbarMenuItem.Link path={option.path}>
                <NavbarMenuItem.Li optionName={option.optionName} />
              </NavbarMenuItem.Link>
            </NavbarMenuItem.Root>
          );
        })}
      </ul>
      <div className="navbar-loginAndCart">
        <NavbarMenuItem.Root>
          <NavbarMenuItem.Link path={"/signup"}>
            <NavbarMenuItem.Login />
          </NavbarMenuItem.Link>
        </NavbarMenuItem.Root>

        <NavbarMenuItem.Root>
          <NavbarMenuItem.Link path={"/cart"}>
            <NavbarMenuItem.Cart />
          </NavbarMenuItem.Link>
        </NavbarMenuItem.Root>
      </div>
    </>
  );
};

const BarMenu = ({ handleCloseMenu, handleMenuClick, menuAnchor, open }) => {
  const menuOptions = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Gaming",
      path: "/gaming",
    },
    {
      name: "Office",
      path: "/office",
    },
    {
      name: "Login",
      path: "/login",
    },
    {
      name: "Cart",
      path: "/cart",
    },
  ];

  return (
    <>
      <IconButton onClick={handleMenuClick}>
        <MenuIcon />
      </IconButton>
      <Menu anchorEl={menuAnchor} open={open} onClose={handleCloseMenu}>
        {menuOptions.map((item, index) => {
          return (
            <Link
              key={item.path + index}
              to={item.path}
              style={{ textDecoration: "inherit", color: "inherit" }}
            >
              <MenuItem sx={{ px: 4, py: 1 }} onClick={handleCloseMenu}>
                {item.name}
              </MenuItem>
            </Link>
          );
        })}
      </Menu>
    </>
  );
};
