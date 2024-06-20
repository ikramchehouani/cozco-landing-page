import React from 'react';
import './ProductChoices.css';
import chichaMoradaImage from '../../assets/product/chicha-morada-product.png';
import maracuyaImage from '../../assets/product/maracuya-product.png';

const ProductChoices = () => (
  <section className="product-choices">
    <div className="product-row">
      <div className="product-item chicha-morada">
        <div className="product-image">
          <img src={chichaMoradaImage} alt="Chicha Morada" />
        </div>
        <div className="product-description">
          <h2>CHICHA MORADA</h2>
          <p>La Chicha Morada est une boisson populaire et familiale typiquement péruvienne. Elle est fabriquée à partir d'une variété de maïs violet foncé qui est intensivement cultivée dans la cordillère des Andes au Pérou.</p>
          <p><strong>Composition :</strong> maïs violet, pomme, ananas, cannelle, clous de girofle, sucre de canne</p>
          <p><strong>Prix :</strong></p>
          <ul>
            <li>1 caissette de 16 bouteilles d’1L = 79,20€ HT</li>
            <li>1 caissette de 32 bouteilles de 50cl = 95,20€ HT</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="product-row">
      <div className="product-item maracuya">
        <div className="product-description">
          <h2>MARACUYA</h2>
          <p>Le jus de Maracuya, ou fruit de la passion, est une boisson très populaire au Pérou et dans le reste de l'Amérique latine. C'est une boisson rafraîchissante, à la fois douce et acide.</p>
          <p><strong>Composition :</strong> fruit de la passion, citron vert, sucre de canne</p>
          <p><strong>Prix :</strong></p>
          <ul>
            <li>1 caissette de 16 bouteilles d’1L = 84,80€ HT</li>
            <li>1 caissette de 32 bouteilles de 50cl = 95,20€ HT</li>
          </ul>
        </div>
        <div className="product-image">
          <img src={maracuyaImage} alt="Maracuya" />
        </div>
      </div>
    </div>
  </section>
);

export default ProductChoices;
