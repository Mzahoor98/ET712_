import React from 'react';
import homeImage from './images/home.jpg';

const Home = () => {
  return (
    <div>
    <h1 className="page-title">Home Page</h1>

      <img
        src={homeImage} 
        alt="Custom homepage banner"
        className="page-image"
      />
      <p className="page-text">
        Welcome to the Home Page! Navigate to explore more interesting facts.
      </p>
    </div>
  );
};

export default Home;
