import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import './Checkout.css';
import useCart from '../hooks/useCart';

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [formData, setFormData] = useState({
    firstName: '',
    companyName: '',
    streetAddress: '',
    apartment: '',
    city: '',
    phone: '',
    email: '',
    saveInfo: true
  });
  const { cartItems, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    if (!formData.firstName || !formData.streetAddress || !formData.city || 
        !formData.phone || !formData.email) {
      alert('Please fill in all required fields');
      return;
    }

    const order = {
      orderId: `ORD-${Date.now()}`,
      date: new Date().toISOString(),
      items: cartItems,
      total: getCartTotal(),
      paymentMethod,
      customerInfo: formData,
      status: 'processing'
    };

    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    localStorage.setItem('orders', JSON.stringify([...orders, order]));

    clearCart();
    navigate('/order-confirmation', { state: { order } });
  };

  return (
    <div className="checkout-container">
      <div className="breadcrumb">
        <Link to="/">Home</Link> / 
        <Link to="/cart">Cart</Link> / 
        <strong>Checkout</strong>
      </div>

      <form onSubmit={handlePlaceOrder} className="checkout-grid">
        <div className="billing-form">
          <h2>Billing Details</h2>

          <label>First Name<span>*</span>
            <input name="firstName" value={formData.firstName} onChange={handleInputChange} required />
          </label>
          <label>Company Name
            <input name="companyName" value={formData.companyName} onChange={handleInputChange} />
          </label>
          <label>Street Address<span>*</span>
            <input name="streetAddress" value={formData.streetAddress} onChange={handleInputChange} required />
          </label>
          <label>Apartment
            <input name="apartment" value={formData.apartment} onChange={handleInputChange} />
          </label>
          <label>City<span>*</span>
            <input name="city" value={formData.city} onChange={handleInputChange} required />
          </label>
          <label>Phone<span>*</span>
            <input name="phone" type="tel" value={formData.phone} onChange={handleInputChange} required />
          </label>
          <label>Email<span>*</span>
            <input name="email" type="email" value={formData.email} onChange={handleInputChange} required />
          </label>

          <label>
            <input type="checkbox" name="saveInfo" checked={formData.saveInfo} onChange={handleInputChange} />
            Save info for next time
          </label>
        </div>

        <div className="order-summary">
          <h2>Your Order</h2>
          {cartItems.map(item => (
            <div className="product-item" key={item.id}>
              <img src={item.image} alt={item.name} />
              <span>{item.name} × {item.quantity}</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}

          <div className="totals">
            <p>Subtotal: <strong>${getCartTotal()}</strong></p>
            <p>Shipping: <strong>Free</strong></p>
            <p>Total: <strong>${getCartTotal()}</strong></p>
          </div>

          <div className="payment-options">
            <h3>Payment Method</h3>
            <label>
              <input type="radio" name="payment" checked={paymentMethod === 'bank'} onChange={() => setPaymentMethod('bank')} />
              Bank Transfer
            </label>
            <label>
              <input type="radio" name="payment" checked={paymentMethod === 'cod'} onChange={() => setPaymentMethod('cod')} />
              Cash on delivery
            </label>
          </div>

          <div className="coupon">
            <input type="text" placeholder="Coupon Code" />
            <button type="button">Apply Coupon</button>
          </div>

          <button type="submit" className="place-order" disabled={cartItems.length === 0}>
            Place Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
