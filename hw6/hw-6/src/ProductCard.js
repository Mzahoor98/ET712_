import React from 'react';
import './ProductCard.css'; 

const ProductCard = ({ name, image, price, inStock }) => {
  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <h3 className="product-name">{name}</h3>
      <p className="product-price">${price.toFixed(2)}</p>
      <p className={`availability ${inStock ? 'in-stock' : 'out-of-stock'}`}>
        {inStock ? 'In Stock' : 'Out of Stock'}
      </p>
    </div>
  );
};

export default ProductCard;
