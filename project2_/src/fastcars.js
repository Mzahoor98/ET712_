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
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  const handleRequestQuote = () => {
    setQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setQuoteModalOpen(false);
  };

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
      <div className="quote-section">
        <button className="quote-button" onClick={handleRequestQuote}>
          Request a Quote
        </button>
      </div>
      {quoteModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-button" onClick={handleCloseQuoteModal}>
              &times;
            </button>
            <h1>Get a Quote!</h1>
            
            <form>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" placeholder="Enter your name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="Enter your email" />
              </div>
              <div className="form-group">
                <label htmlFor="car">Interested Car:</label>
                <select id="car" name="car">
                  {cars.map((car, index) => (
                    <option key={index} value={car.name}>
                      {car.name}
                    </option>
                  ))}
                </select>
              </div>
              <button type="submit" className="submit-button">
                Submit
              </button>
              <button type="button" className="close-modal-button" onClick={handleCloseQuoteModal}>
                Close
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default FastCars;
