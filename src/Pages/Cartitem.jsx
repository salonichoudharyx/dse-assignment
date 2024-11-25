import React from 'react'
import './Cartitem.css'
function Cartitem({name, price, quantity}) {
  return (
    <>
    <div className='data-container'>
       
        <div className="cart-title">Name: {name}</div>
        <div className="cart-price">Price: {price}</div>
        <div className="cart-quantity">Quantity: {quantity}</div>
       
    </div>
    </>
  )
}

export default Cartitem