import React from 'react';
import ProductChoices from './ProductChoices';
import Order from '../Order/Order';
import Map from '../Restaurant/Map';

const ProductPage = () => (
  <div className="product-page">
    <ProductChoices />
    <Order />
  </div>
);

export default ProductPage;
