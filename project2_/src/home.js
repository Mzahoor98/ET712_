import React from "react";
import { Link } from "react-router-dom";
import "./cars.css";
import LamboImage from "./images/lambo.webp";
import RollsRoyceSceptreImage from "./images/rollsroycesceptre.webp";
import Tesla from "./images/tesla.avif"; // Ensure this file exists and is compatible

const Home = () => {
  const cars = [
    {
      image: LamboImage,
      category: "Fast Cars",
      link: "/fast-cars",
    },
    {
      image: RollsRoyceSceptreImage,
      category: "Luxurious Cars",
      link: "/luxurious-cars",
    },
    {
      image: Tesla, // Fixed typo from "imgage" to "image"
      category: "Eco-Friendly Cars",
      link: "/eco-friendly-cars",
    },
  ];

  return (
    <div className="cars-page">
      <h2>Everything Cars Dealership</h2>
      <p>Explore Fast, Luxurious, and Eco-Friendly Cars!</p>
      <div className="car-gallery">
        {cars.map((car, index) => (
          <div className="car-card" key={index}>
            <img src={car.image} alt={car.category} className="home-car-image" />
            <h3>{car.category}</h3>
            <Link to={car.link} className="category-link">
              View {car.category}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
