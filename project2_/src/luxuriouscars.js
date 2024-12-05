import React, { useState } from "react";
import CarModal from "./carmodal";
import "./cars.css";

const cars = [
  { name: "Rolls Royce Phantom", speed: "155 mph", image: "https://via.placeholder.com/150?text=Rolls+Royce" },
  { name: "Bentley Flying Spur", speed: "207 mph", image: "https://via.placeholder.com/150?text=Bentley" },
  { name: "Mercedes-Maybach S-Class", speed: "155 mph", image: "https://via.placeholder.com/150?text=Maybach" },
  { name: "Aston Martin DB11", speed: "200 mph", image: "https://via.placeholder.com/150?text=Aston+Martin" },
  { name: "BMW 7 Series", speed: "155 mph", image: "https://via.placeholder.com/150?text=BMW" },
  { name: "Lexus LS", speed: "155 mph", image: "https://via.placeholder.com/150?text=Lexus" },
];

function LuxuriousCars() {
  const [modalData, setModalData] = useState(null);

  return (
    <div className="cars-page">
      <h2>Luxurious Cars</h2>
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

export default LuxuriousCars;
