import React from "react";

const Cart = ({ cart }) => {
  const subtotal = cart.reduce((total, item) => total + item.price, 0);
  const tax = subtotal * 0.0816;
  const total = subtotal + tax;

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cart.map((item, index) => (
        <div key={index} className="cart-item">
          <p>{item.title} - ${item.price}</p>
        </div>
      ))}
      <hr />
      <p>Subtotal: ${subtotal.toFixed(2)}</p>
      <p>Sales Tax (8.16%): ${tax.toFixed(2)}</p>
      <h3>Total: ${total.toFixed(2)}</h3>
    </div>
  );
};

export default Cart;
