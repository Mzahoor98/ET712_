import React, { useState } from "react";
import { Link } from "react-router-dom";
import CarModal from "./carmodal";
import "./cars.css";
import BugattiChiron from "./images/bugattichiron.jpeg";
import Mclaren from "./images/mclarenspeedtail.webp";
import Koenigsegg from "./images/koenigsegg.webp";
import LamboAventador from "./images/lamboaventador.jpg";
import Ferrari from "./images/Ferrari.jpg";
import Porsche from "./images/Porsche.avif";

const cars = [
  {
    name: "Bugatti Chiron",
    speed: "261 mph",
    image: BugattiChiron,
    country: "France",
    specs: [
      "8.0L quad-turbocharged W16 engine",
      "1,479 horsepower",
      "0-60 mph in 2.4 seconds",
    ],
  },
  {
    name: "McLaren Speedtail",
    speed: "250 mph",
    image: Mclaren,
    country: "United Kingdom",
    specs: [
      "4.0L twin-turbocharged V8 engine",
      "1,055 horsepower",
      "0-60 mph in 2.9 seconds",
    ],
  },
  {
    name: "Koenigsegg Jesko",
    speed: "278 mph",
    image: Koenigsegg,
    country: "Sweden",
    specs: [
      "5.0L twin-turbocharged V8 engine",
      "1,600 horsepower",
      "0-60 mph in 2.6 seconds",
    ],
  },
  {
    name: "Lamborghini Aventador",
    speed: "217 mph",
    image: LamboAventador,
    country: "Italy",
    specs: [
      "6.5L naturally aspirated V12 engine",
      "730 horsepower",
      "0-60 mph in 2.8 seconds",
    ],
  },
  {
    name: "Ferrari SF90",
    speed: "211 mph",
    image: Ferrari,
    country: "Italy",
    specs: [
      "4.0L twin-turbocharged V8 engine",
      "986 horsepower",
      "0-60 mph in 2.5 seconds",
    ],
  },
  {
    name: "Porsche 911 Turbo S",
    speed: "205 mph",
    image: Porsche,
    country: "Germany",
    specs: [
      "3.8L twin-turbocharged flat-six engine",
      "640 horsepower",
      "0-60 mph in 2.6 seconds",
    ],
  },
];

function FastCars() {
  const [modalData, setModalData] = useState(null);

  return (
    <div className="cars-page">
      <Link to="/" className="back-link">Back to Home</Link> 
      <h2>Fast Cars</h2>
      <p>Experience the thrill of speed with these high-performance machines.</p>
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
