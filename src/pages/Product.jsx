import React from "react";
import { useNavigate } from "react-router-dom";
import "./Product.css";
import useCart from "../hooks/useCart";

const Product = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const product = {
    id: 1,
    name: "BoAt Rockez 550 Headphones",
    price: 120,
    image: "https://i.pinimg.com/736x/0d/86/b1/0d86b14bb6503907498ebff62062ae12.jpg",
    description: "boAt Rockerz 550 Over Ear Bluetooth Headphones with Upto 20H Playback, 50mm Dynamic Driver, 500mAh Battery",
    rating: 4.5,
    reviews: 150
  };

  const handleAddToCart = () => {
    addToCart(product);
    navigate("/cart"); // Navigate to cart after adding product
  };

  return (
    <div className="product-container">
      <nav className="breadcrumb">
        Product / Earbuds / <span>BoAt Headphone</span>
      </nav>

      <div className="product-details">
        <div className="product-image">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="product-info">
          <h2>{product.name}</h2>
          <div className="rating">
            <span>★★★★☆</span>
            <span className="reviews">({product.reviews} Reviews)</span>
          </div>
          <h3>$ {product.price}</h3>
          <p className="product-desc">{product.description}</p>
          <hr />
          <div className="product-actions">
            <button className="add-to-cart-btn" onClick={handleAddToCart}>
              Add to Cart
            </button>
            <button className="cancel-btn" onClick={() => navigate("/")}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
