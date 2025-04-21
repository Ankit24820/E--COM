import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css"; // Importing CSS
import { FaPaperPlane } from "react-icons/fa"; // Importing an icon

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* QuickBuy Section */}
        <div className="footer-section">
          <h2>BomBerZ</h2>
          <p>Subscribe</p>
          <p>Get 10% off your first order</p>
          <div className="subscribe-box">
            <input type="email" placeholder="Enter your email" />
            <button><FaPaperPlane /></button>
          </div>
        </div>

        {/* Support Section */}
        <div className="footer-section">
          <h3>Support</h3>
          <p>Tramba ,Rajkot , Guajarat, India.</p>
          <p>akumar@gmail.com</p>
          <p>+91 8102334400</p>
        </div>

        {/* Account Section */}
        <div className="footer-section">
          <h3>Account</h3>
          <ul>
            <li><a href="#">My Account</a></li>
            <li><a href="#">Login / Register</a></li>
            <li><a href="#">Cart</a></li>
            <li><a href="#">Wishlist</a></li>
            <li><a href="#">Shop</a></li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section">
          <h3>BomBerZ Link</h3>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms Of Use</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
