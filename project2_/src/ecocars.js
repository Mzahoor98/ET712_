import React, { useState } from "react";
import { Link } from "react-router-dom";
import CarModal from "./carmodal";
import "./cars.css";
import Tesla from "./images/tesla.jpeg";
import NissanLeaf from "./images/nissanleaf.jpg";
import ChevBolt from "./images/chevbolt.avif";
import Bmwi3 from "./images/bmwi3.avif";
import Hyundai from "./images/hyundai.jpg";
import Prius from "./images/prius.avif";

const cars = [
  {
    name: "Tesla Model 3",
    speed: "140 mph",
    image: Tesla,
    country: "United States",
    specs: [
      "Electric motor with 283 horsepower",
      "Range: 358 miles (long range)",
      "0-60 mph in 5.3 seconds",
    ],
  },
  {
    name: "Nissan Leaf",
    speed: "93 mph",
    image: NissanLeaf,
    country: "Japan",
    specs: [
      "Electric motor with 147 horsepower",
      "Range: 226 miles",
      "Affordable entry-level EV",
    ],
  },
  {
    name: "Chevrolet Bolt",
    speed: "91 mph",
    image: ChevBolt,
    country: "United States",
    specs: [
      "Electric motor with 200 horsepower",
      "Range: 259 miles",
      "Regenerative braking system",
    ],
  },
  {
    name: "BMW i3",
    speed: "99 mph",
    image: Bmwi3,
    country: "Germany",
    specs: [
      "Electric motor with 170 horsepower",
      "Range: 153 miles",
      "Sustainable carbon-fiber construction",
    ],
  },
  {
    name: "Hyundai Ioniq",
    speed: "115 mph",
    image: Hyundai,
    country: "South Korea",
    specs: [
      "Electric motor with 134 horsepower",
      "Range: 170 miles",
      "Advanced driver-assist features",
    ],
  },
  {
    name: "Toyota Prius",
    speed: "112 mph",
    image: Prius,
    country: "Japan",
    specs: [
      "Hybrid engine with 121 horsepower",
      "Combined fuel economy: 56 MPG",
      "Iconic eco-friendly design",
    ],
  },
];

function EcoFriendlyCars() {
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
      <h2>Eco-Friendly Cars</h2>
      <p>Drive towards a greener future with these eco-friendly cars.</p>
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
            <h2>Request a Quote</h2>
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

export default EcoFriendlyCars;
