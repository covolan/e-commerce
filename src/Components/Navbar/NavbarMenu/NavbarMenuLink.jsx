import React from 'react'
import { Link } from "react-router-dom";

function NavbarMenuLink({children, path}) {
  return (
    <>
        <Link style={{ textDecoration: "inherit", color: "inherit" }} to={path}>
            {children}
        </Link>
    </>
  )
}

export default NavbarMenuLink