import React, { useContext, useEffect, useState } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import cancelIcon from "../assets/cancel.svg";
import { Modal, Box } from "@mui/material";

function CartItems() {
  const {
    productData,
    cartItems,
    delFromCart,
    addToCart,
    emptyCartItem,
    emptyAllCart,
  } = useContext(ShopContext);
  const [totalValue, setTotalValue] = useState(0);
  const [cartTotalItems, setCartTotalItems] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    emptyAllCart();
  };

  const modalBoxStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "fitContent",
    borderRadius: "16px",
    p: 4,
    bgcolor: "background.paper",
  };

  const taxes = 0.15;

  //  Run the total cost of the added products to the cart
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

  // Custom page if cart is empty, TODO: Send it to a separated component
  if (cartTotalItems == 0) {
    return (
      <div className="empty-cart">
        <span className="material-symbols-outlined icon-cart">
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
      <Modal open={openModal} onClose={handleCloseModal}>
        <Box sx={modalBoxStyle}>
          <h2 className="purchase-title">🎊 Thanks for your purchase! 🎊</h2>
          <p className="purchase-text">
            Feel free to continue exploring our online store
          </p>
        </Box>
      </Modal>

      <h1 className="cart-title">
        Your cart Has {cartTotalItems} products{" "}
        <button onClick={emptyAllCart} className="cart-btn empty-btn">
          Clear cart
        </button>
      </h1>
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
                  <td className="quantity">
                    <div className="quantity-content">
                      <button
                        onClick={() => {
                          delFromCart(item.id);
                        }}
                        className="left-btn-qnt"
                      >
                        -
                      </button>
                      <p className="quantity-text">{cartItems[item.id]}</p>
                      <button
                        onClick={() => {
                          addToCart(item.id);
                        }}
                        className="right-btn-qnt"
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="total">
                    {`$${item.price * cartItems[item.id]}`}
                    <img
                      className="cancel"
                      onClick={() => {
                        emptyCartItem(item.id);
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
              <td className="total-table-amount">${totalValue.toFixed(2)}</td>
            </tr>
            <tr>
              <td className="total-table-emph">Taxes:</td>
              <td className="total-table-amount">
                ${(totalValue * taxes).toFixed(2)}
              </td>
            </tr>
            <tr>
              <td className="total-table-emph grand-total">Grand Total:</td>
              <td className="total-table-amount grand-total">
                ${(totalValue * taxes + totalValue).toFixed(2)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <button onClick={handleOpenModal} className="checkout-btn cart-btn">
        Check out
      </button>
    </div>
  );
}

export default CartItems;
