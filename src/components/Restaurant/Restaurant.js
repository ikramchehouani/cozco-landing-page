import React from 'react';
import './Restaurant.css';
import restaurantImage from '../../assets/restaurant/villa-mikuna.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Restaurant = () => (
  <section className="restaurant">
    <h2>Restaurants Partenaires</h2>
    <div className="restaurant-content">
      <div className="restaurant-image">
        <img src={restaurantImage} alt="Restaurant Mikuna" />
      </div>
      <div className="restaurant-description">
        <h3>Mikuna</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <div className="social-icons">
          <FontAwesomeIcon icon={faArrowLeft} className="icon left-arrow" />
          <FontAwesomeIcon icon={faInstagram} className="icon" />
          <FontAwesomeIcon icon={faFacebook} className="icon" />
          <FontAwesomeIcon icon={faArrowRight} className="icon right-arrow" />
        </div>
      </div>
    </div>
  </section>
);

export default Restaurant;
