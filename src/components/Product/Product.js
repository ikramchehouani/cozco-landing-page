import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';
import productImage from '../../assets/product/chicha-morada-product.png';

const Product = () => (
  <section id="product" className="products">
    <div className="products-image">
      <img src={productImage} alt="Chicha Morada" />
    </div>
    <div className="products-content">
      <h2>Nos boissons</h2>
      <p>
        Nous proposons deux boissons typiques d’Amérique latine : la Chicha Morada et le jus de Maracuya. 
      </p>
      <p>
        Fraîchement préparées en région parisienne à base d’ingrédients naturels, nos boissons sont livrées en caissettes pour tous les restaurants, évènements et particuliers d’Ile-de-France.
      </p>
      <Link to="/boissons">
        <button className="products-button">Voir les boissons</button>
      </Link>
    </div>
  </section>
);

export default Product;
