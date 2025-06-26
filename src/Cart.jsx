import React from "react";

const Cart = ({ cartItems }) => {
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="cart-summary">
      <h2>🧺 Cart</h2>
      <p>Total Items: {cartItems.length}</p>
      <p>Total Price: ₹{totalPrice}</p>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            <span>{item.name}</span>
            <span>₹{item.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
