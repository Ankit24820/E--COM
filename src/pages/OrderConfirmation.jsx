import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const OrderConfirmation = () => {
  const location = useLocation();
  const { order } = location.state || {};

  if (!order) return <p>No order found.</p>;

  return (
    <div className="order-confirmation">
      <h1>Thank you for your order!</h1>
      <p>Order ID: <strong>{order.orderId}</strong></p>
      <p>Date: {new Date(order.date).toLocaleString()}</p>
      <p>Total: <strong>${order.total}</strong></p>

      <h3>Items:</h3>
      <ul>
        {order.items.map((item) => (
          <li key={item.id}>
            {item.name} × {item.quantity} - ${item.price * item.quantity}
          </li>
        ))}
      </ul>

      <p>We’ll send confirmation to: <strong>{order.customerInfo.email}</strong></p>

      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default OrderConfirmation;
