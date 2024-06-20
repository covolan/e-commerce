import "./Navbar.css";
import { NavbarMenuItem } from "./NavbarMenu";

function Navbar() {
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
    <div className="navbar">
      <div className="navbar-content">

      <p className="navbar-shopName">INFORMATIKA</p>
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
          <NavbarMenuItem.Link path={"/login"}>
            <NavbarMenuItem.Login />
          </NavbarMenuItem.Link>
        </NavbarMenuItem.Root>

        <NavbarMenuItem.Root>
          <NavbarMenuItem.Link path={"/cart"}>
            <NavbarMenuItem.Cart />
          </NavbarMenuItem.Link>
        </NavbarMenuItem.Root>
      </div>
      </div>
    </div>
  );
}

export default Navbar;
