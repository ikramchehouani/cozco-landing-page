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
        <p>
          Chaîne de restaurants spécialisée dans la cuisine du Pérou et d’Amérique latine.
        </p>
        <p>
          • 57 Rue de Miromesnil 75008 Paris
        </p>
        <p>
          • 140 Rue Montmartre 75002 Paris
        </p>
        <div className="social-icons">
          <FontAwesomeIcon icon={faArrowLeft} className="icon left-arrow" />
          <a href="https://www.instagram.com/mikunaparis/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="icon" />
          </a>
          <a href="https://www.facebook.com/Mikunaparis" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} className="icon" />
          </a>
          <FontAwesomeIcon icon={faArrowRight} className="icon right-arrow" />
        </div>
      </div>
    </div>
  </section>
);

export default Restaurant;
