import React from "react";
import { useNavigate, NavLink } from "react-router-dom";
import "./AdminPanel.css";
import { FaHome, FaBox, FaTags, FaClipboardList, FaSignOutAlt } from "react-icons/fa";

const AdminPanel = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

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
        <button className="logout-btn" onClick={handleLogout}>
          <FaSignOutAlt /> Logout
        </button>
      </aside>

      {/* Main Panel Content */}
      <main className="admin-main">
        <div className="admin-stats">
          <div className="stat-card">
            <p>Total Order</p>
            <h3>$ 2500</h3>
          </div>
          <div className="stat-card">
            <p>Active Order</p>
            <h3>$ 2500</h3>
          </div>
          <div className="stat-card">
            <p>Complete Order</p>
            <h3>$ 2500</h3>
          </div>
        </div>

        <div className="order-table">
          <h4>Recent Order</h4>
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Order Id</th>
                <th>Date</th>
                <th>Name</th>
                <th>Status</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>BoAt Headphone</td>
                <td>$ 120</td>
                <td>Jan 8th</td>
                <td>Satyam</td>
                <td>Delivered</td>
                <td>$ 120.0</td>
              </tr>
              <tr>
                <td>Skull Earbuds</td>
                <td>$ 140</td>
                <td>Nov 8th</td>
                <td>Ankit</td>
                <td>Canceled</td>
                <td>$ 140.0</td>
              </tr>
              <tr>
                <td>BoAt Red Earphone</td>
                <td>$ 90</td>
                <td>Nov 8th</td>
                <td>Prince</td>
                <td>Delivered</td>
                <td>$ 90.0</td>
              </tr>
              <tr>
                <td>FireBolt Pro</td>
                <td>$ 140</td>
                <td>Aug 8th</td>
                <td>Aman</td>
                <td>Canceled</td>
                <td>$ 140.0</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default AdminPanel;
