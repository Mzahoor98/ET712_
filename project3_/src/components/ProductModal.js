import React from "react";

const ProductModal = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className="modal-overlay" style={styles.overlay}>
      <div className="modal-content" style={styles.content}>
        <button style={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <h2>{product.title}</h2>
        <img
          src={product.image}
          alt={product.title}
          style={{ width: "200px", height: "auto" }}
        />
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <p>Available Quantity: {product.quantity || "N/A"}</p>
        <button style={styles.addButton}>Add to Cart</button>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  content: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    width: "400px",
    textAlign: "center",
    position: "relative",
  },
  closeButton: {
    position: "absolute",
    top: "10px",
    right: "15px",
    border: "none",
    background: "transparent",
    fontSize: "1.5rem",
    cursor: "pointer",
  },
  addButton: {
    marginTop: "10px",
    padding: "10px 20px",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1rem",
  },
};

export default ProductModal;
