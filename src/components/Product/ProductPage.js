import React from 'react';
import ProductChoices from './ProductChoices';
import Order from '../Order/Order';
import './ProductPage.css';
import decorativeImage from '../../assets/string-yellow-for-titles.png';

const ProductPage = () => (
  <div className="product-page">
    <section className="title-section">
      <div className="decorative-line">
        <img src={decorativeImage} alt="Decorative" className="decorative-image" />
        <h2 className="section-title">NOS BOISSONS</h2>
        <img src={decorativeImage} alt="Decorative" className="decorative-image" />
      </div>
    </section>
    <ProductChoices />
    <Order />
  </div>
);

export default ProductPage;
