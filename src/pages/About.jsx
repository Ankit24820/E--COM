import React from "react";
import { Link } from "react-router-dom";
import "./About.css";
import { FaTruck, FaHeadphones, FaSyncAlt, FaShoppingBag, FaUsers, FaWallet } from "react-icons/fa";

const About = () => {
  return (
    <div className="about-container">
      {/* Top Section */}
      <div className="story-section">
        <div className="text-section">
          <h2>Our Story</h2>
          <p>
            Launched in 2025, Exclusive is South Asia’s premier online shopping
            marketplace with an active presence in Bangladesh. Supported by
            wide range of tailored marketing, data and service solutions,
            Exclusive has 10,500 sellers and 300 brands and serves 3 million
            customers across the region.
          </p>
          <p>
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assortment in categories
            ranging from consumer.
          </p>
        </div>
        <div className="image-section">
          <img
            src="https://i.pinimg.com/originals/5f/20/91/5f2091acf7010f241c947767a24ea5fa.jpg"
            alt="Redesigned fit"
          />
          <div className="image-overlay">
            <p>Redesigned fit for all-day comfort</p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="stats-section">
        <div className="stat-card">
          <FaShoppingBag className="stat-icon" />
          <h3>10.5k</h3>
          <p>Sellers active our site</p>
        </div>
        <div className="stat-card active">
          <FaWallet className="stat-icon" />
          <h3>33k</h3>
          <p>Monthly Product Sale</p>
        </div>
        <div className="stat-card">
          <FaUsers className="stat-icon" />
          <h3>45.5k</h3>
          <p>Customer active in our site</p>
        </div>
        <div className="stat-card">
          <FaWallet className="stat-icon" />
          <h3>25k</h3>
          <p>Annual gross sale in our site</p>
        </div>
      </div>

      {/* Team Section */}
      <div className="team-section">
        <div className="team-member">
          <img src="https://tse1.mm.bing.net/th?id=OIP._DSWELGT89UwX_JlkknCHwHaFJ&pid=Api&P=0&h=180" alt="Tom Cruise" />
          <h4>Tom Cruise</h4>
          <p>Founder & Chairman</p>
          <div className="socials">
            <i className="fab fa-twitter" />
            <i className="fab fa-instagram" />
            <i className="fab fa-linkedin" />
          </div>
        </div>
        <div className="team-member">
          <img src="https://assets.glamour.de/photos/62ff4487aa9a446148bdd12c/16:9/w_2560%2Cc_limit/emma-watson-gettyimages-1406845793.jpg" alt="Emma Watson" />
          <h4>Emma Watson</h4>
          <p>Managing Director</p>
          <div className="socials">
            <i className="fab fa-twitter" />
            <i className="fab fa-instagram" />
            <i className="fab fa-linkedin" />
          </div>
        </div>
        <div className="team-member">
          <img src="https://tse3.mm.bing.net/th?id=OIP.KU8d-_jyO2UknnKJT8R3kgHaE8&pid=Api&P=0&h=180" alt="Will Smith" />
          <h4>Will Smith</h4>
          <p>Product Designer</p>
          <div className="socials">
            <i className="fab fa-twitter" />
            <i className="fab fa-instagram" />
            <i className="fab fa-linkedin" />
          </div>
        </div>
      </div>

      {/* Highlights Section */}
      <div className="highlight-section">
        <div className="highlight-card">
          <FaTruck />
          <h5>FREE AND FAST DELIVERY</h5>
          <p>Free delivery for all orders over $140</p>
        </div>
        <div className="highlight-card">
          <FaHeadphones />
          <h5>24/7 CUSTOMER SERVICE</h5>
          <p>Friendly 24/7 customer support</p>
        </div>
        <div className="highlight-card">
          <FaSyncAlt />
          <h5>MONEY BACK GUARANTEE</h5>
          <p>We return money within 30 days</p>
        </div>
      </div>
    </div>
  );
};

export default About;
