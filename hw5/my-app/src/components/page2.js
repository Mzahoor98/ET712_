import React from 'react';
import pineappleImage from './images/pineapple.png';

const Page2 = () => {
  return (
    <div>
    <h1 className="page-title">Cool Detail</h1>

      <img
        src={pineappleImage}
        alt="Bananas and berries illustration"
        className="page-image"
      />
      <p className="page-text">
        Pineapples don't grow on trees, they grow from the ground! 
        Each pineapple plant produces just one fruit at a time, 
        and it takes about two years to fully mature. 
      </p>
    </div>
  );
};

export default Page2;
