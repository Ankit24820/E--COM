import React, { useEffect, useState } from "react";
import "./Myorder.css";

const MyOrder = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(savedOrders);
  }, []);

  return (
    <div className="my-order-container">
      <h2>My Orders</h2>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        orders.map((order, index) => (
          <div className="order-card" key={index}>
            <h3>Order #{index + 1}</h3>
            {order.items.map((item, i) => (
              <div key={i} className="order-item">
                <span>{item.name}</span>
                <span>Qty: {item.quantity}</span>
                <span>Price: ₹{item.price}</span>
              </div>
            ))}
            <p><strong>Total: ₹{order.total}</strong></p>
            <p>Date: {order.date}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default MyOrder;
