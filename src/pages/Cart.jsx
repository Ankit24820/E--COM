import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import useCart from "../hooks/useCart";
import "./Cart.css";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();

  useEffect(() => {
    console.log("Cart component - Current cart items:", cartItems);
  }, [cartItems]);

  return (
    <div className="cart-container">
      <nav className="breadcrumb">
        Home / <span>Cart</span>
      </nav>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <h3 className="empty-cart-msg">🛒 Your cart is currently empty.</h3>
          <p className="empty-cart-text">
            Looks like you haven’t added anything to your cart yet.
          </p>
          <Link to="/" className="shop-now-btn">
            Shop Now
          </Link>
        </div>
      ) : (
        <>
          <table className="cart-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td className="product-info">
                    <button
                      className="remove-btn"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <FaTimes />
                    </button>
                    <img src={item.image} alt={item.name} />
                    <span>{item.name}</span>
                  </td>
                  <td>${item.price}</td>
                  <td>
                    <select
                      className="qty-select"
                      value={item.quantity}
                      onChange={(e) =>
                        updateQuantity(item.id, parseInt(e.target.value))
                      }
                    >
                      {[1, 2, 3, 4, 5].map((qty) => (
                        <option key={qty} value={qty}>
                          0{qty}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td>${item.price * item.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="cart-actions">
            <Link to="/" className="btn-outline">
              Return To Shop
            </Link>
          </div>

          <div className="cart-bottom">
            <div className="coupon-section">
              <input type="text" placeholder="Coupon Code" />
              <button className="apply-btn">Apply Coupon</button>
            </div>

            <div className="cart-summary">
              <h3>Cart Total</h3>
              <p>
                <span>Subtotal:</span> <span>${getCartTotal()}</span>
              </p>
              <p>
                <span>Shipping:</span> <span>Free</span>
              </p>
              <hr />
              <p className="total">
                <span>Total:</span> <span>${getCartTotal()}</span>
              </p>
              <Link to="/checkout" className="checkout-btn">
                Proceed to checkout
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
