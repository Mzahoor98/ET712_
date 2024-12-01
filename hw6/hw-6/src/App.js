import React from 'react';
import ProductCard from './ProductCard';
import './App.css';
import Airpods from './images/airpodmax.jpg';
import Iphone from './images/iphone16.jpg'
import CoffeeMaker from './images/coffeemaker.jpg'

const App = () => {
  const products = [
    {
      id: 1,
      name: 'Airpods Max',
      image: Airpods,
      price: 499.99,
      inStock: true,
    },
    {
      id: 2,
      name: 'Iphone 16 Pro',
      image: Iphone,
      price: 999.99,
      inStock: false,
    },
    {
      id: 3,
      name: 'Coffee Maker',
      image: CoffeeMaker,
      price: 59.99,
      inStock: true,
    },
  ];

  return (
    <div className="app">
      <h1 className="app-title">Products Listed</h1>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            image={product.image}
            price={product.price}
            inStock={product.inStock}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
