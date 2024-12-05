import React from "react";
import "./modal.css";

function CarModal({ data, onClose }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <img src={data.image} alt={data.name} />
        <h2>{data.name}</h2>
        <p>Top Speed: {data.speed}</p>
      </div>
    </div>
  );
}

export default CarModal;
