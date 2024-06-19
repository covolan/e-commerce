import React, { useContext } from 'react'
import "./CartItems.css"
import { ShopContext } from '../../Context/ShopContext'

function CartItems() {
    const { productData, cartItems, delFromCart } = useContext(ShopContext);
  return (
    <div className='cartItems'>
        {productData.map((item) => {
            if(cartItems[item.id] > 0) {
                return(
                    <div className="Item">
                        <img src={item.image} alt="" />
                        <p>{item.productName}</p>
                        <p>{item.price} </p>
                        <p> Quantity: {cartItems[item.id]} </p>
                        <p> Total: {item.price * cartItems[item.id]} </p>
                        <p onClick={() => {delFromCart(item.id)}}>remove</p>
                    </div>
                )
            }
        })}
    </div>
  )
}

export default CartItems