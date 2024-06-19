import React, { useContext } from 'react'
import { MenuContext } from '../../../Context/MenuContext';

function NavbarMenuLogin() {
  const  [selectedMenu, setSelectedMenu] = useContext(MenuContext);
  return (
    <button onClick={() => {setSelectedMenu("")}}>Login</button>
  )
}

export default NavbarMenuLogin