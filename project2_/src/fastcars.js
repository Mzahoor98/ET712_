import React, { useState } from "react";
import CarModal from "./carmodal";
import "./cars.css";

const cars = [
  { name: "Bugatti Chiron", speed: "261 mph", image: "https://via.placeholder.com/150?text=Bugatti" },
  { name: "McLaren Speedtail", speed: "250 mph", image: "https://via.placeholder.com/150?text=McLaren" },
  { name: "Koenigsegg Jesko", speed: "278 mph", image: "https://via.placeholder.com/150?text=Koenigsegg" },
  { name: "Lamborghini Aventador", speed: "217 mph", image: "https://via.placeholder.com/150?text=Lamborghini" },
  { name: "Ferrari SF90", speed: "211 mph", image: "https://via.placeholder.com/150?text=Ferrari" },
  { name: "Porsche 911 Turbo S", speed: "205 mph", image: "https://via.placeholder.com/150?text=Porsche" },
];

function FastCars() {
  const [modalData, setModalData] = useState(null);

  return (
    <div className="cars-page">
      <h2>Fast Cars</h2>
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

export default FastCars;
