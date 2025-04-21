import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./AdminLogin.css";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [adminId, setAdminId] = useState("");
  const [password, setPassword] = useState("");

  // Define fixed admin credentials
  const validAdmin = {
    username: "ankit12@gmail.com",
    password: "ankit123"
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check against hardcoded credentials
    if (adminId === validAdmin.username && password === validAdmin.password) {
      alert("✅ Welcome Admin!");
      navigate("/admin"); // Redirect to admin dashboard
    } else {
      alert("❌ Invalid admin credentials. Please try again.");
    }
  };

  return (
    <div className="admin-login-container">
      <div className="admin-login-card">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcqWoT713KRy7buWxpiAyovaZW-RYFvD0qEQ&s"
          alt="Admin Logo"
          className="admin-logo"
        />
        <h2>Admin <span className="brand">Login</span></h2>
        <p className="admin-subtitle">Authorized personnel only</p>

        <form className="admin-login-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Admin ID or Email"
            value={adminId}
            onChange={(e) => setAdminId(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Log In</button>
        </form>

        <a href="#" className="admin-forgot">Forgot Password?</a>
        <Link to="/login" className="back-to-site">← Back to User Login</Link>
      </div>
    </div>
  );
};

export default AdminLogin;
