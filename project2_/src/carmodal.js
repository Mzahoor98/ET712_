import React from "react";
import "./modal.css";

const CarModal = ({ data, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h2>{data.name}</h2>
        <img src={data.image} alt={data.name} className="modal-image" />
        <p>
          <strong>Top Speed:</strong> {data.speed}
        </p>
        <p>
          <strong>Country of Origin:</strong> {data.country}
        </p>
        <div className="specs">
          <strong className="spec-title">Unique Specs:</strong>
          <ul>
            {data.specs.map((spec, index) => (
              <li key={index}>{spec}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CarModal;
