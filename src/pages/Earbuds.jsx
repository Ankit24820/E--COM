import React from 'react';
import './Earbuds.css';
import { Link } from 'react-router-dom';

const earbudsData = [
  {
    name: 'FireBoult Buds Pro',
    price: 140,
    rating: 5,
    image: 'https://www.shutterstock.com/image-photo/wireless-headphones-on-white-background-600nw-2093565850.jpg',
  },
  {
    name: 'Skull Wireless Earbuds',
    price: 160,
    rating: 3,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFO6j7csAdAUx9-7x3lO3xpCsuO6dIvA7EvA&s',
  },
  {
    name: 'Skull Buds Lite',
    price: 105,
    rating: 4,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB3PzEtT5PGGGxkJZoqGRH8c9Ft5IC8hEi_g&s',
  },
  {
    name: 'Noise 96 pro',
    price: 130,
    rating: 4,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhc-9KXzCo6DD7Lpycal4xRuHJPgm9ZrAT_w&s',
  },
  {
    name: 'Boult Round Music',
    price: 170,
    rating: 5,
    image: 'https://www.jiomart.com/images/product/original/494249654/boult-audio-z40-true-wireless-in-ear-earbuds-with-60h-playtime-zen-enc-mic-low-latency-gaming-type-c-fast-charging-made-in-india-10mm-rich-bass-drivers-ipx5-bluetooth-v5-3-ear-buds-tws-blue-digital-o494249654-p605918504-0-202310311937.jpeg?im=Resize=(1000,1000)',
  },
  {
    name: 'pTron Gaming Earbuds',
    price: 200,
    rating: 4,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkXKhPWo_SJLljzt9YL9sSrsJ27x-kGvmNbw&s',
  },
  {
    name: 'Skull Aerospace',
    price: 190,
    rating: 4,
    image: 'https://cdn.mos.cms.futurecdn.net/YNGahMfKazMhDE3qfEnUhW-320-80.jpg',
  },
  {
    name: 'BoAt Lite 160',
    price: 90,
    rating: 4,
    image: 'https://img.freepik.com/free-vector/headphones-wireless-realistic-composition-with-isolated-image-phones-with-power-bank-dock-station-with-reflections-vector-illustration_1284-73201.jpg?semt=ais_hybrid&w=740',
  },
];

const Earbuds = () => {
  return (
    <div className="earbuds-container">
      <h2>Wireless EarBuds</h2>
      <div className="earbuds-grid">
        {earbudsData.map((item, index) => (
          <div className="earbud-card" key={index}>
            <img src={item.image} alt={item.name} />
            <h4>{item.name}</h4>
            <p>${item.price}</p>
            <div className="rating">
              {'★'.repeat(item.rating)}
              {'☆'.repeat(5 - item.rating)}
            </div>
            <Link to="/cart">
              <button>Add To Cart</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Earbuds;
