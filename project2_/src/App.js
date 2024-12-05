import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import FastCars from "./fastcars.js";
import LuxuriousCars from "./luxuriouscars.js";
import EcoFriendlyCars from "./ecocars.js";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Car Explorer</h1>
          <p>Discover Fast, Luxurious, and Eco-Friendly Cars!</p>
        </header>
        <main>
          <section className="categories">
            <Link to="/fast-cars" className="category-link">
              Fast Cars
            </Link>
            <Link to="/luxurious-cars" className="category-link">
              Luxurious Cars
            </Link>
            <Link to="/eco-friendly-cars" className="category-link">
              Eco-Friendly Cars
            </Link>
          </section>
        </main>
        <Routes>
          <Route path="/fast-cars" element={<FastCars />} />
          <Route path="/luxurious-cars" element={<LuxuriousCars />} />
          <Route path="/eco-friendly-cars" element={<EcoFriendlyCars />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
