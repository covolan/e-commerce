import React, { useContext } from 'react'
import cartIcon from "../../assets/cart-shopping.png";
import { MenuContext } from '../../../Context/MenuContext';


function NavbarMenuCart() {
  const  [selectedMenu, setSelectedMenu] = useContext(MenuContext);

  return (
    <img onClick={() => {setSelectedMenu("")}} src={cartIcon} />
  )
}

export default NavbarMenuCart