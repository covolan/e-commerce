import "./Navbar.css";
import { NavbarMenuItem } from "./NavbarMenu";

function Navbar() {

  return (
    <div className="navbar">
      <p className="navbar-shopName">INFORMATIKA</p>
      <ul className="navbar-menu">
        <NavbarMenuItem.Root>
          <NavbarMenuItem.Link path={"/"}>
            <NavbarMenuItem.Li optionName={"home"} />
          </NavbarMenuItem.Link>
        </NavbarMenuItem.Root>

        <NavbarMenuItem.Root>
          <NavbarMenuItem.Link path={"/gaming"}>
            <NavbarMenuItem.Li optionName={"gaming"} />
          </NavbarMenuItem.Link>
        </NavbarMenuItem.Root>

        <NavbarMenuItem.Root>
          <NavbarMenuItem.Link path={"/office"}>
            <NavbarMenuItem.Li optionName={"office"} />
          </NavbarMenuItem.Link>
        </NavbarMenuItem.Root>
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
  );
}

export default Navbar;
