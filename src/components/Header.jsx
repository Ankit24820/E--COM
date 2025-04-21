import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import { FaSearch, FaShoppingCart, FaUser, FaBox } from "react-icons/fa";

const Header = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isSingUp") === "true"; // Check if user is signed in

  const handleLogout = () => {
    localStorage.removeItem("isSingUp"); // Clear sign-up status
    navigate("/login"); // Navigate to login page
  };

  return (
    <header className="header">
      <div className="container">
        {/* Top Banner */}
        <div className="top-banner">
          <p>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
            <Link to="/shop">Shop Now</Link>
          </p>
        </div>

        {/* Navbar */}
        <nav className="navbar">
          {/* Logo */}
          <div className="logo">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcqWoT713KRy7buWxpiAyovaZW-RYFvD0qEQ&s"
              alt="BomBerZ Logo"
            />
            <span>BomBerZ</span>
          </div>

          {/* Nav Links */}
          <ul className="nav-links">
            <li><Link to="/" className="active">Home</Link></li>
            <li className="dropdown">
              <span>Category ▾</span>
              <ul className="dropdown-menu">
                <li><Link to="/category/headphones">Headphones</Link></li>
                <li><Link to="/category/earbuds">Earbuds</Link></li>
                <li><Link to="/category/wired-earphones">Wired Earphones</Link></li>
              </ul>
            </li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>

          {/* Icons Section */}
          <div className="nav-icons">
            {/* Search Box */}
            <div className="search-box">
              <input type="text" placeholder="What are you looking for?" />
              <button><FaSearch /></button>
            </div>

            {/* My Orders */}
            {isLoggedIn && (
              <Link to="/myorders">
                <FaBox className="icon" title="My Orders" />
              </Link>
            )}

            {/* Cart */}
            <Link to="/cart">
              <FaShoppingCart className="icon" title="Cart" />
            </Link>

            {/* Profile or Signup */}
            {isLoggedIn ? (
              <Link to="/profile">
                <FaUser className="icon" title="My Account" />
              </Link>
            ) : (
              <Link to="/signup">
                <FaUser className="icon" title="Sign Up" />
              </Link>
            )}

            {/* Logout */}
            {isLoggedIn && (
              <button onClick={handleLogout} className="logout-btn">
                Logout
              </button>
            )}

            {/* Admin Panel */}
            <Link to="/admin/login">
              <button className="admin-btn">Admin</button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
