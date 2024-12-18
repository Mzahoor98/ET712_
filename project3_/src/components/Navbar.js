import React, { useState } from "react";
import { Link } from "react-router-dom";
import products from "../data/products"; // Ensure this file contains your product data
import "./Navbar.css";

const Navbar = ({ cartCount, setCart }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleProductClick = (product) => {
    setSelectedProduct(product); // Open modal for the selected product
    setShowSearch(false); // Close the search bar
  };

  const handleAddToCart = () => {
    setCart((prevCart) => [...prevCart, selectedProduct]);
    alert(`${selectedProduct.title} has been added to your cart.`);
    setSelectedProduct(null); // Close the modal
  };

  return (
    <header className="header">
      <div className="navbar-container">
        <div className="nav-left">
          <Link to="/" className="brand">ShoeCity</Link>
        </div>
        <nav>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Shoes</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <div className="nav-icons">
          <span className="search-icon" role="img" aria-label="Search" onClick={toggleSearch}>🔍</span>
          {showSearch && (
            <div className="search-dropdown">
              <input
                type="text"
                placeholder="Search shoes..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="search-input"
              />
              <div className="search-results">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product) => (
                    <button
                      key={product.id}
                      onClick={() => handleProductClick(product)}
                      className="search-item"
                    >
                      {product.title}
                    </button>
                  ))
                ) : (
                  <p className="no-results">No matching shoes found.</p>
                )}
              </div>
            </div>
          )}
          <Link to="/cart" className="cart-link">
            <span role="img" aria-label="Cart">🛒</span>
            <sup className="cart-count">{cartCount}</sup>
          </Link>
          <Link to="/auth" className="profile-link">
            <span role="img" aria-label="Profile">👤</span>
          </Link>
        </div>
      </div>

      {/* Modal Window for Selected Product */}
      {selectedProduct && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>{selectedProduct.title}</h2>
            <img src={selectedProduct.image} alt={selectedProduct.title} />
            <p>{selectedProduct.description}</p>
            <p><strong>Price:</strong> ${selectedProduct.price.toFixed(2)}</p>
            <button onClick={handleAddToCart} className="add-to-cart-btn">Add to Cart</button>
            <button onClick={() => setSelectedProduct(null)} className="close-btn">Close</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
