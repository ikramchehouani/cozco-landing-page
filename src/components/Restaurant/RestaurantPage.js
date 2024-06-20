import React from 'react';
import Map from './Map';
import Order from '../Order/Order';
import Restaurant from './Restaurant';

const RestaurantPage = () => (
  <div className="product-page">
    <Map />
    <Restaurant />
    <Order />
  </div>
);

export default RestaurantPage;
