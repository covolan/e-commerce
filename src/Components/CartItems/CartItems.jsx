import React, { useContext, useEffect, useState } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import cancelIcon from "../assets/cancel.svg";

function CartItems() {
  const { productData, cartItems, delFromCart } = useContext(ShopContext);
  const [totalValue, setTotalValue] = useState(0);
  const [cartTotalItems, setCartTotalItems] = useState(0);

  const taxes = 0.15;

  const runTotal = () => {
    let tempTotal = 0;
    let tempCartTotalItems = 0;
    productData.map((item) => {
      if (cartItems[item.id] > 0) {
        tempTotal += item.price * cartItems[item.id];
        tempCartTotalItems += cartItems[item.id];
      }
    });
    setTotalValue(tempTotal);
    setCartTotalItems(tempCartTotalItems);
  };

  useEffect(() => {
    runTotal();
  }, [cartItems]);

  if (cartTotalItems == 0) {
    return (
      <div className="empty-cart">
        <span class="material-symbols-outlined icon-cart">
          sentiment_dissatisfied
        </span>
        <h1 className="empty-cart-title">
          Oops.. It seems that you didn't added anything yet!
        </h1>
        <h2 className="empty-cart-subtitle">
          Feel free to explore our store and find what you need!
        </h2>
      </div>
    );
  }

  return (
    <div className="cart">
      <h1 className="cart-title">Your cart Has {cartTotalItems} items</h1>
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
      <div className="cart-summary">
        <table className="total-table">
          <tbody>
            <tr>
              <td className="total-table-emph">Subtotal:</td>
              <td className="total-table-amount">${totalValue}</td>
            </tr>
            <tr>
              <td className="total-table-emph">Taxes:</td>
              <td className="total-table-amount">${totalValue * taxes}</td>
            </tr>
            <tr>
              <td className="total-table-emph grand-total">Grand Total:</td>
              <td className="total-table-amount grand-total">
                ${totalValue * taxes + totalValue}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <button className="checkout-btn">Check out</button>
    </div>
  );
}

export default CartItems;
