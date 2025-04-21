import React, { useEffect, useState } from "react";
import "./Headphones.css";

const Headphones = () => {
  const [headphonesData, setHeadphonesData] = useState([]);

  useEffect(() => {
    // Fetch the stored products from localStorage (will be empty initially)
    const storedData = JSON.parse(localStorage.getItem("headphones")) || [];
    setHeadphonesData(storedData);
  }, []);

  const handleAddToCart = (item) => {
    // Get the current cart data from localStorage or initialize as an empty array
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    // Add the selected product to the cart
    existingCart.push(item);

    // Save the updated cart back to localStorage
    localStorage.setItem("cart", JSON.stringify(existingCart));

    // Redirect to Cart page (adjust URL as per your app structure)
    window.location.href = "/Cart.jsp"; // Adjust as needed (e.g., use React Router)
  };

  return (
    <div className="headphones-container">
      {headphonesData.length > 0 ? (
        headphonesData.map((item) => (
          <div className="headphone-card" key={item.id}>
            <img src={item.image} alt={item.name} />
            <button className="add-to-cart" onClick={() => handleAddToCart(item)}>
              Add To Cart
            </button>
            <h3>{item.name}</h3>
            <p>${item.price}</p>
            <div className="stars">
              {Array.from({ length: item.rating }, (_, i) => (
                <span key={i}>⭐</span>
              ))}
            </div>
          </div>
        ))
      ) : (
        <p>No products available. Please add some products from the admin panel.</p>
      )}
    </div>
  );
};

export default Headphones;
