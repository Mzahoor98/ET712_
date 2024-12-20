import React from "react";
import { Link } from "react-router-dom";
import "./cars.css";
import LamboImage from "./images/lambo.webp";
import RollsRoyceSceptreImage from "./images/rollsroycesceptre.webp";
import Tesla from "./images/tesla.avif"; 

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
      image: Tesla, 
      category: "Eco-Friendly Cars",
      link: "/eco-friendly-cars",
    },
  ];
  

  return (
    <div className="cars-page">
      <p>Cars are more than just vehicles. They represent speed, luxury, and innovation.
          At Everything Cars, we bring you a curated collection of cars
          designed to satisfy your need for thrill, comfort, and sustainability.
          Explore our range and find the perfect car that matches your lifestyle.</p>
      
      <div className="car-gallery">
        {cars.map((car, index) => (
          <div className="car-card" key={index}>
            <img src={car.image} alt={car.category} className="home-car-image" />
            <h3>{car.category}</h3>
            <Link to={car.link} className="category-link">View</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
