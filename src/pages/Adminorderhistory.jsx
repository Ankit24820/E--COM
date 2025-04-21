import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './AdminOrderHistory.css';
import { FaHome, FaBox, FaTags, FaClipboardList, FaSignOutAlt } from 'react-icons/fa';

const AdminOrderHistory = () => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem('orders') || '[]');
    setOrders(savedOrders);
  }, []);

  const handleLogout = () => {
    navigate('/');
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

      {/* Main Content */}
      <main className="admin-main">
        <h2 className="admin-order-title">Order History</h2>
        {orders.length === 0 ? (
          <p className="no-orders">No orders yet.</p>
        ) : (
          orders.map((order) => (
            <div key={order.orderId} className="order-card">
              <div className="order-header">
                <h4>Order ID: {order.orderId}</h4>
                <span>{new Date(order.date).toLocaleString()}</span>
              </div>
              <div className="order-details">
                <p><strong>Total:</strong> ${order.total}</p>
                <p><strong>Payment:</strong> {order.paymentMethod}</p>
                <p><strong>Status:</strong> {order.status}</p>
              </div>
              <div className="order-items">
                <h5>Items:</h5>
                <ul>
                  {order.items.map(item => (
                    <li key={item.id}>
                      {item.name} × {item.quantity} — ${item.price.toFixed(2)} each
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))
        )}
      </main>
    </div>
  );
};

export default AdminOrderHistory;
