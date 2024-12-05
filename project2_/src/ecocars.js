import React, { useState } from "react";
import CarModal from "./carmodal";
import "./cars.css";

const cars = [
  { name: "Tesla Model 3", speed: "140 mph", image: "https://via.placeholder.com/150?text=Tesla" },
  { name: "Nissan Leaf", speed: "93 mph", image: "https://via.placeholder.com/150?text=Nissan" },
  { name: "Chevrolet Bolt", speed: "91 mph", image: "https://via.placeholder.com/150?text=Chevrolet" },
  { name: "BMW i3", speed: "99 mph", image: "https://via.placeholder.com/150?text=BMW+i3" },
  { name: "Hyundai Ioniq", speed: "115 mph", image: "https://via.placeholder.com/150?text=Hyundai" },
  { name: "Toyota Prius", speed: "112 mph", image: "https://via.placeholder.com/150?text=Toyota" },
];

function EcoFriendlyCars() {
  const [modalData, setModalData] = useState(null);

  return (
    <div className="cars-page">
      <h2>Eco-Friendly Cars</h2>
      <div className="car-gallery">
        {cars.map((car, index) => (
          <div
            key={index}
            className="car-card"
            onClick={() => setModalData(car)}
          >
            <img src={car.image} alt={car.name} />
            <h3>{car.name}</h3>
          </div>
        ))}
      </div>
      {modalData && (
        <CarModal
          data={modalData}
          onClose={() => setModalData(null)}
        />
      )}
    </div>
  );
}

export default EcoFriendlyCars;
