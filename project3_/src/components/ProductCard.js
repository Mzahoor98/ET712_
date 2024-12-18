import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p><strong>Price:</strong> ${product.price.toFixed(2)}</p>
      <button onClick={onAddToCart} className="add-to-cart-btn">Add to Cart</button>
    </div>
  );
};

export default ProductCard;
