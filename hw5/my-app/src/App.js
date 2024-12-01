import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/home';
import Page1 from './components/page1';
import Page2 from './components/page2';
import './App.css';
import './components/style.css';

const App = () => {
  return (
    <div className="app-container">
      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/page1">Fun Fact</Link>
          <Link to="/page2">Cool Detail</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;


