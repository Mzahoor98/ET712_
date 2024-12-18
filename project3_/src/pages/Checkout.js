import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";

const Checkout = ({ cart, setCart }) => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    bankAccount: "",
  });
  const [showModal, setShowModal] = useState(false); // State to manage modal visibility
  const navigate = useNavigate();

  const TAX_RATE = 0.08; // 8% tax
  const DELIVERY_FEE = 10.0; // Flat delivery fee

  const calculateSubtotal = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  const calculateTax = (subtotal) => {
    return (subtotal * TAX_RATE).toFixed(2);
  };

  const calculateTotal = (subtotal, tax) => {
    return (parseFloat(subtotal) + parseFloat(tax) + DELIVERY_FEE).toFixed(2);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCart([]); // Clear the cart
    setShowModal(true); // Show confirmation modal
  };

  const closeModal = () => {
    setShowModal(false);
    navigate("/"); // Redirect to home page
  };

  const subtotal = parseFloat(calculateSubtotal());
  const tax = parseFloat(calculateTax(subtotal));
  const total = parseFloat(calculateTotal(subtotal, tax));

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty. Add items to your cart before proceeding.</p>
      ) : (
        <>
          <div className="checkout-breakdown">
            <h2>Order Summary</h2>
            <div className="breakdown-item">
              <span>Subtotal:</span> <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="breakdown-item">
              <span>Tax (8%):</span> <span>${tax.toFixed(2)}</span>
            </div>
            <div className="breakdown-item">
              <span>Delivery Fee:</span> <span>${DELIVERY_FEE.toFixed(2)}</span>
            </div>
            <div className="breakdown-item total">
              <span>Total:</span> <span>${total.toFixed(2)}</span>
            </div>
          </div>

          <form className="checkout-form" onSubmit={handleSubmit}>
            <h2>Billing Information</h2>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                placeholder="Enter your address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="bankAccount">Bank Account Info</label>
              <input
                type="text"
                id="bankAccount"
                name="bankAccount"
                placeholder="Enter your bank account number"
                value={formData.bankAccount}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="confirm-btn">Place Order</button>
          </form>
        </>
      )}

      {/* Confirmation Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Your order has been placed successfully!</h2>
            <button onClick={closeModal} className="continue-shopping-btn">Continue Shopping</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
