import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (res.ok) {
        alert('✅ Login successful!');
        // Optionally save user data to localStorage/sessionStorage here
        navigate('/'); // Redirect to homepage
      } else {
        alert(`❌ ${data.error || 'Invalid email or password'}`);
      }
    } catch (err) {
      console.error("Login error:", err);
      alert("❌ Failed to connect to server");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcqWoT713KRy7buWxpiAyovaZW-RYFvD0qEQ&s"
          alt="BomBerZ Logo"
          className="logo"
        />
        <h2>
          Log in to <span className="brand">BomBerZ</span>
        </h2>
        <p className="subtitle">Enter your details below</p>
        <form className="login-form" onSubmit={handleLogin}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <div className="login-actions">
            <button type="submit" disabled={loading}>
              {loading ? 'Logging in...' : 'Log In'}
            </button>
            <Link to="/forgot-password" className="forgot">Forget Password?</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
