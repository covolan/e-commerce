import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";

function CartItems() {
  const { productData, cartItems, delFromCart } = useContext(ShopContext);
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Image</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        {productData.map((item) => {
          if (cartItems[item.id] > 0) {
            return (
              <tr key={item.productName}>
                <td>{item.productName}</td>
                <td>
                  <img className="product-image" src={item.image[0]} alt="" />
                </td>
                <td>{item.price}</td>
                <td>{cartItems[item.id]}</td>

                <td>{item.price * cartItems[item.id]}</td>
                <td
                  onClick={() => {
                    delFromCart(item.id);
                  }}
                >
                  X
                </td>
              </tr>
            );
          }
        })}
      </tbody>
    </table>
  );
}

export default CartItems;
