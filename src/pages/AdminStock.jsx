import React, { useState, useEffect } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import "./AdminPanel.css";
import "./AdminStock.css";
import {
  FaHome,
  FaBox,
  FaTags,
  FaClipboardList,
  FaSignOutAlt,
  FaPlus,
  FaEdit,
} from "react-icons/fa";

const AdminStock = () => {
  const navigate = useNavigate();
  const [stockData, setStockData] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("headphones")) || [];
    setStockData(stored);
  }, []);

  const handleLogout = () => navigate("/");

  const handleAddProduct = () => {
    const name = prompt("Enter Product Name:");
    const price = prompt("Enter Product Price:");
    const image = prompt("Enter Product Image URL:");
    const rating = prompt("Enter Rating (1-5):");

    if (name && price && image) {
      const newProduct = {
        id: Date.now(),
        name,
        price: parseFloat(price),
        image,
        rating: parseInt(rating) || 5,
      };

      const updated = [...stockData, newProduct];
      localStorage.setItem("headphones", JSON.stringify(updated));
      setStockData(updated);
      alert("Product added!");
    }
  };

  const handleEditProduct = (id) => {
    const updatedData = stockData.map((product) => {
      if (product.id === id) {
        const newName = prompt("Enter new name:", product.name);
        const newPrice = prompt("Enter new price:", product.price);
        const newImage = prompt("Enter new image URL:", product.image);
        const newRating = prompt("Enter new rating:", product.rating);

        return {
          ...product,
          name: newName,
          price: parseFloat(newPrice),
          image: newImage,
          rating: parseInt(newRating) || 5,
        };
      }
      return product;
    });

    setStockData(updatedData);
    localStorage.setItem("headphones", JSON.stringify(updatedData));
    alert("Product updated!");
  };

  return (
    <div className="admin-container">
      <aside className="admin-sidebar">
        <h2 className="admin-logo">Admin</h2>
        <ul className="admin-menu">
          <li>
            <NavLink to="/admin" className={({ isActive }) => (isActive ? "active-link" : "")}>
              <FaHome /> Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/order-history" className={({ isActive }) => (isActive ? "active-link" : "")}>
              <FaClipboardList /> Order History
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/customer-complain" className={({ isActive }) => (isActive ? "active-link" : "")}>
              <FaBox /> Customer Complain
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/stock" className={({ isActive }) => (isActive ? "active-link" : "")}>
              <FaTags /> Stock
            </NavLink>
          </li>
        </ul>
        <button className="logout-btn" onClick={handleLogout}>
          <FaSignOutAlt /> Logout
        </button>
      </aside>

      <main className="admin-main">
        <div className="stock-header">
          <h2 className="page-title">Stock Management</h2>
          <button className="add-product-btn" onClick={handleAddProduct}>
            <FaPlus /> Add Product
          </button>
        </div>

        <table className="admin-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Rating</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {stockData.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>${product.price}</td>
                <td>{product.rating}⭐</td>
                <td>
                  <button className="edit-btn" onClick={() => handleEditProduct(product.id)}>
                    <FaEdit /> Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default AdminStock;
