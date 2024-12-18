import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-section about">
          <h2 className="footer-title">ShoeCity</h2>
          <p>
            Your ultimate destination for Nike, Yeezy, and Air Jordan sneakers.
            Discover the perfect pair to match your style.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section contact">
          <h3>Contact Info</h3>
          <p>📍 123 Sneaker Street, ShoeCity, SC 12345</p>
          <p>📞 +1 800 555 1234</p>
          <p>✉️ support@shoecity.com</p> 
        </div>

        {/* Newsletter */}
        <div className="footer-section newsletter">
          <h3>Newsletter</h3>
          <p>Sign up now to receive exclusive offers, deals, and updates!</p>
          <form>
            <input type="email" placeholder="Enter your email" />
            <button type="submit">→</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 ShoeCity | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
