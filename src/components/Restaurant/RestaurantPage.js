import React from 'react';
import Map from './Map';
import Order from '../Order/Order';
import Restaurant from './Restaurant';
import decorativeImage from '../../assets/string-yellow-for-titles.png';

const RestaurantPage = () => (
  <div className="product-page">
    <section className="title-section">
      <div className="decorative-line">
        <img src={decorativeImage} alt="Decorative" className="decorative-image" />
        <h2 className="section-title">Où nous trouver ?</h2>
        <img src={decorativeImage} alt="Decorative" className="decorative-image" />
      </div>
    </section>
    <Map />
    <Restaurant />
    <Order />
  </div>
);

export default RestaurantPage;
