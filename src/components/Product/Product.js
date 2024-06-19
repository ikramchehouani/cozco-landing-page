import React from 'react';
import './Product.css';
import productImage from '../../assets/product/chicha-morada-product.png';

const Product = () => (
  <section className="products">
    <div className="products-image">
      <img src={productImage} alt="Chicha Morada" />
    </div>
    <div className="products-content">
      <h2>Nos produits</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <button className="products-button">Découvrez nos produits</button>
    </div>
  </section>
);

export default Product;
