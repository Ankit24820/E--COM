import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import Header from '../components/Header';

const flashSales = [
  {
    id: 1,
    title: "BoAt Rockerz 650 Headphone",
    price: 20.0,
    originalPrice: 35.0,
    discount: 32,
    image: "https://i.pinimg.com/736x/0d/86/b1/0d86b14bb6503907498ebff62062ae12.jpg",
    rating: 4.9,
    reviews: 200,
  },
  {
    id: 2,
    title: "Skull Wireless Earbuds",
    price: 10.0,
    originalPrice: 15.0,
    discount: 33,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFO6j7csAdAUx9-7x3lO3xpCsuO6dIvA7EvA&s",
    rating: 4.7,
    reviews: 170,
  },
  {
    id: 3,
    title: "BoAt Red Wired Earphone",
    price: 9.0,
    originalPrice: 12.0,
    discount: 25,
    image: "https://gourban.in/cdn/shop/files/GT2.jpg?v=1706879688",
    rating: 4.8,
    reviews: 98,
  },
  {
    id: 4,
    title: "BoAt Rockerz 600 Headphones",
    price: 18.0,
    originalPrice: 25.0,
    discount: 28,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxRuX2jo_LfLVrTadCJY6j1wV-sq-rSgb09g&s",
    rating: 4.6,
    reviews: 85,
  },
  {
    id: 5,
    title: "FireBolt EarBuds Pro",
    price: 14.0,
    originalPrice: 20.0,
    discount: 30,
    image: "https://www.shutterstock.com/image-photo/wireless-headphones-on-white-background-600nw-2093565850.jpg",
    rating: 4.5,
    reviews: 115,
  },
];

function Home() {
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];

    const productIndex = existingCart.findIndex(item => item.id === product.id);
    let updatedCart;

    if (productIndex > -1) {
      // If product already exists in cart, increase quantity
      updatedCart = [...existingCart];
      updatedCart[productIndex].quantity += 1;
    } else {
      updatedCart = [...existingCart, { ...product, quantity: 1 }];
    }

    localStorage.setItem('cart', JSON.stringify(updatedCart));
    navigate('/cart');
  };

  const handleBuyNow = () => {
    navigate('/cart');
  };

  return (
    <div className="home-container">
      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-text">
          <h2>HEADPHONE OF THE DAY</h2>
          <h1>ALL YOUR <span>STYLE ARE HERE</span></h1>
        </div>
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/017/054/098/small_2x/headphones-design-3d-rendering-for-product-mockup-png.png"
          alt="Hero Headphones"
          className="hero-image"
        />
      </header>

      {/* Flash Sales */}
      <section className="flash-sales">
        <h3>Flash Sales</h3>
        <div className="products">
          {flashSales.map((item) => (
            <div className="product-card" key={item.id}>
              <div className="discount-badge">-{item.discount}%</div>
              <img src={item.image} alt={item.title} />
              <h4>{item.title}</h4>
              <div className="price">
                <span>${item.price.toFixed(2)}</span>
                <del>${item.originalPrice.toFixed(2)}</del>
              </div>
              <div className="rating">
                ⭐ {item.rating} ({item.reviews})
              </div>
              <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </section>

      {/* Music Experience Section */}
      <section className="experience-section">
        <div className="experience-text">
          <h2>Enhance Your Music Experience</h2>
          <div className="features">
            <div>20h</div>
            <div>40m</div>
            <div>53s</div>
          </div>
          <button className="buy-now" onClick={handleBuyNow}>Buy Now!</button>
        </div>
        <img
          src="https://www.pngall.com/wp-content/uploads/5/Logitech-Gaming-Headset-PNG-Image.png"
          alt="Featured Headphones"
          className="experience-image"
        />
      </section>

      {/* Footer */}
      <footer className="footer">
        <div>
          <h4>🚚 FREE AND FAST DELIVERY</h4>
          <p>Free delivery for all orders over $140</p>
        </div>
        <div>
          <h4>📞 24/7 CUSTOMER SERVICE</h4>
          <p>Friendly 24/7 customer support</p>
        </div>
        <div>
          <h4>💰 MONEY BACK GUARANTEE</h4>
          <p>We return money within 30 days</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
