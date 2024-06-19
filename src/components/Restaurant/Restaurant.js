import React from 'react';
import './Restaurant.css';
import restaurantImage from '../../assets/restaurant/villa-mikuna.jpg';

const Restaurant = () => (
  <section className="products">
    <div className="products-image">
      <img src={restaurantImage} alt="Chicha Morada" />
    </div>
    <div className="products-content">
      <h2>Restaurants partenaires</h2>
      <h3>Mikuna</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      {/* <button className="products-button">Découvrez nos produits</button> */}
    </div>
  </section>
);

export default Restaurant;
