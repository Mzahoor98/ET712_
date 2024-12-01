import React from 'react';
import honeyImage from './images/honey.jpg';

const Page1 = () => {
  return (
    <div>
     <h1 className="page-title">Fun Fact</h1>
     <img
     src={honeyImage} alt="A fun fact about honey"
     className="page-image"
     />
     <p className="page-text">
        Did you know? Honey never spoils. Archaeologists have found pots of honey in
        ancient Egyptian tombs that are over 3,000 years old and still perfectly edible!
        </p>
    </div>
  );
};

export default Page1;
