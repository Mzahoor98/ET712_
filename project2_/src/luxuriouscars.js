import React, { useState } from "react"; 
import { Link } from "react-router-dom"; 
import CarModal from "./carmodal";
import "./cars.css";
import RollsRoyce from "./images/rollsroyce.jpeg";
import Bentley from "./images/bentley.avif";
import MercedesMayback from "./images/mercedesmayback.avif";
import AstonMartin from "./images/astonmartin.jpg";
import Bmw7series from "./images/bmw7series.avif";
import LexusLs from "./images/lexusls.avif";

const cars = [
  {
    name: "Rolls Royce Phantom",
    speed: "155 mph",
    image: RollsRoyce,
    country: "United Kingdom",
    specs: [
      "6.75L V12 engine",
      "563 horsepower",
      "Luxurious leather interior",
    ],
  },
  {
    name: "Bentley Flying Spur",
    speed: "207 mph",
    image: Bentley,
    country: "United Kingdom",
    specs: [
      "6.0L W12 engine",
      "626 horsepower",
      "High-tech infotainment system",
    ],
  },
  {
    name: "Mercedes-Maybach S-Class",
    speed: "155 mph",
    image: MercedesMayback,
    country: "Germany",
    specs: [
      "4.0L V8 Biturbo engine",
      "496 horsepower",
      "Executive seating package",
    ],
  },
  {
    name: "Aston Martin DB11",
    speed: "200 mph",
    image: AstonMartin,
    country: "United Kingdom",
    specs: [
      "5.2L V12 engine",
      "630 horsepower",
      "Iconic British design",
    ],
  },
  {
    name: "BMW 7 Series",
    speed: "155 mph",
    image: Bmw7series,
    country: "Germany",
    specs: [
      "3.0L TwinPower Turbo inline 6-cylinder",
      "375 horsepower",
      "Adaptive cruise control",
    ],
  },
  {
    name: "Lexus LS",
    speed: "155 mph",
    image: LexusLs,
    country: "Japan",
    specs: [
      "3.5L V6 engine",
      "416 horsepower",
      "Mark Levinson surround sound system",
    ],
  },
];

function LuxuriousCars() {
  const [modalData, setModalData] = useState(null);

  return (
    <div className="cars-page">
      <Link to="/" className="back-link">Back to Home</Link> 
      <h2>Luxurious Cars</h2>
      <p>Step into sophistication and comfort with these luxurious cars.</p>
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
