import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";  // Import useNavigate here
import { FaHome, FaBox, FaTags, FaClipboardList, FaSignOutAlt } from "react-icons/fa";
import "./AdminPanel.css";
import "./CustomerComplain.css";

const CustomerComplain = () => {
  const [complaints, setComplaints] = useState([]);
  const navigate = useNavigate(); // Initialize navigate function

  useEffect(() => {
    const savedComplaints = JSON.parse(localStorage.getItem("complaints") || "[]");
    setComplaints(savedComplaints);
  }, []);

  return (
    <div className="admin-container">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <h2 className="admin-logo">Admin</h2>
        <ul className="admin-menu">
          <li>
            <NavLink to="/admin" className={({ isActive }) => isActive ? "active-link" : ""}>
              <FaHome /> Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/order-history" className={({ isActive }) => isActive ? "active-link" : ""}>
              <FaClipboardList /> Order History
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/customer-complain" className={({ isActive }) => isActive ? "active-link" : ""}>
              <FaBox /> Customer Complain
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/stock" className={({ isActive }) => isActive ? "active-link" : ""}>
              <FaTags /> Stock
            </NavLink>
          </li>
        </ul>
        <button className="logout-btn" onClick={() => navigate("/")}>
          <FaSignOutAlt /> Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="admin-main">
        <h2 className="page-title">Customer Complaints</h2>
        {complaints.length === 0 ? (
          <p>No complaints submitted yet.</p>
        ) : (
          <ul className="complain-list">
            {complaints.map((complaint, index) => (
              <li key={index}>
                <strong>{complaint.name}:</strong> {complaint.message}
                <p>Email: {complaint.email}</p>
                <p>Phone: {complaint.phone}</p>
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
};

export default CustomerComplain;
