import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import cancelIcon from "../assets/cancel.svg";

function CartItems() {
  const { productData, cartItems, delFromCart } = useContext(ShopContext);
  return (
    <div className="cart">
      <h1 className="cart-title">Your cart Has X items</h1>
      <table>
        <thead>
          <tr>
            <th className="product-th">Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {productData.map((item) => {
            if (cartItems[item.id] > 0) {
              return (
                <tr key={item.productName}>
                  <td className="product-td">
                    <img className="product-image" src={item.image[0]} alt="" />
                    {item.productName}
                  </td>
                  <td>{`$${item.price}`}</td>
                  <td>{cartItems[item.id]}</td>
                  <td className="total">
                    {`$${item.price * cartItems[item.id]}`}
                    <img
                      className="cancel"
                      onClick={() => {
                        delFromCart(item.id);
                      }}
                      src={cancelIcon}
                    />
                  </td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
    </div>
  );
}

export default CartItems;
