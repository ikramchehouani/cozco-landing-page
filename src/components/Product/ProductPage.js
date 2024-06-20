import React from 'react';
import ProductChoices from './ProductChoices';
import Order from '../Order/Order';

const ProductPage = () => (
  <div className="product-page">
    <ProductChoices />
    <Order />
  </div>
);

export default ProductPage;
