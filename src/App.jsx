import { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import ProductsCategory from "./Pages/ProductsCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import Footer from "./Components/Footer/Footer";
import MenuProvider from "./Context/MenuContext";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MenuProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/product" element={<Product />}>
              <Route path=":productId" element={<Product />} />
            </Route>
            <Route path="/" element={<Home />} />
            <Route
              path="/gaming"
              element={<ProductsCategory category="gaming" />}
            />
            <Route
              path="/office"
              element={<ProductsCategory category="office" />}
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<LoginSignup />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </MenuProvider>
    </>
  );
}

export default App;
