import React from 'react';
import './Wiredearphone.css';
import { Link } from 'react-router-dom';

const wiredEarphonesData = [
  {
    name: 'BoAt Wired Earphone',
    price: 90,
    rating: 4,
    image: 'https://gourban.in/cdn/shop/files/GT2.jpg?v=1706879688',
  },
  {
    name: 'Noise T56',
    price: 90,
    rating: 3,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8lwx-poLSnlN0dDqabaJHsh9GWnVTlE9sQQ&s',
  },
  {
    name: 'Boult TDR 78',
    price: 102,
    rating: 4,
    image: 'https://image.made-in-china.com/2f0j00kVIoLyFlkgbN/3-5mm-Audio-Port-Plastic-Material-White-Magnetic-Speaker-Can-Answer-Calls-in-Ear-Wired-Earphones-Solid-Color-Earphones.webp',
  },
  {
    name: 'BoAt Red Earphones',
    price: 90,
    rating: 4,
    image: 'https://itsale.in/wp-content/uploads/2022/08/SWISS-MILITARY-SM-Cozmo-Wired-Earphone-1.jpg',
  },
  {
    name: 'Plain Royal blue black',
    price: 104,
    rating: 4,
    image: 'https://axlworld.com/cdn/shop/products/1_5f3c7610-5535-4fb4-90a4-de961c36c7cc_1024x1024.jpg?v=1645204333',
  },
  {
    name: 'JBL 87 TN',
    price: 95,
    rating: 5,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8j8NT2dBpeprXmErfoDmRSxcfAOyypcMpUg&s',
  },
  {
    name: 'BoAt Pro 96',
    price: 140,
    rating: 4,
    image: 'https://uoons.com/assets/product_image/bf0f23f5c6d27e146473d44026b8e2ea.png',
  },
  {
    name: 'JBL DT 34',
    price: 120,
    rating: 5,
    image: 'https://m.media-amazon.com/images/I/51lZ699JRhL._AC_UF1000,1000_QL80_.jpg',
  },
];

const Wiredearphone = () => {
  return (
    <div className="wired-container">
      <h2>Wired Earphones</h2>
      <div className="wired-grid">
        {wiredEarphonesData.map((item, index) => (
          <div className="wired-card" key={index}>
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

export default Wiredearphone;
