import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-banner">
        <h1>Find Your Perfect Pair</h1>
        <p>Explore our latest collection of stylish and comfortable shoes.</p>
        <Link to="/products">
          <button className="shop-now-btn">Shop Now</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
