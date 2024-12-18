import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import products from "../data/products";
import "./Products.css";

const Products = ({ cart, setCart }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const navigate = useNavigate();

  const handleAddToCartClick = (product) => {
    setSelectedProduct(product); // Open modal for the selected product
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size); // Update the selected size
  };

  const handleConfirmAddToCart = () => {
    if (selectedSize) {
      setCart([...cart, { ...selectedProduct, size: selectedSize }]);
      setSelectedProduct(null); // Close size selection modal
      setSelectedSize(""); // Reset size selection
      setShowConfirmationModal(true); // Show confirmation modal
    } else {
      alert("Please select a shoe size before adding to the cart.");
    }
  };

  const handleContinueShopping = () => {
    setShowConfirmationModal(false);
  };

  const handleGoToCart = () => {
    navigate("/cart");
  };

  return (
    <div className="products-container">
      <h1>Our Shoe Collection</h1>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={() => handleAddToCartClick(product)}
          />
        ))}
      </div>

      {/* Shoe Size Modal */}
      {selectedProduct && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>{selectedProduct.title}</h2>
            <img src={selectedProduct.image} alt={selectedProduct.title} className="modal-image" />
            <p className="modal-description">{selectedProduct.description}</p>
            <p><strong>Price:</strong> ${selectedProduct.price.toFixed(2)}</p>
            <div className="size-selection">
              <h3>Select Shoe Size</h3>
              <div className="sizes">
                {[7, 8, 9, 10, 11, 12].map((size) => (
                  <button
                    key={size}
                    className={`size-btn ${selectedSize === size ? "selected" : ""}`}
                    onClick={() => handleSizeChange(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <button onClick={handleConfirmAddToCart} className="confirm-btn">Add to Cart</button>
            <button onClick={() => setSelectedProduct(null)} className="close-btn">Cancel</button>
          </div>
        </div>
      )}

      {/* Confirmation Modal */}
      {showConfirmationModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Item Added to Cart</h2>
            <p>{selectedProduct?.title} has been successfully added to your cart.</p>
            <div className="modal-actions">
              <button onClick={handleContinueShopping} className="continue-btn">Continue Shopping</button>
              <button onClick={handleGoToCart} className="go-to-cart-btn">Go to Cart</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
