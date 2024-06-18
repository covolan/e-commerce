import { createContext, useState } from "react";

export const MenuContext = createContext({});

export default function MenuProvider({ children }) {
    const [selectedMenu, setSelectedMenu] = useState("home");

  return (
    <MenuContext.Provider value={[selectedMenu, setSelectedMenu]}>
      {children}
    </MenuContext.Provider>
  );
}
