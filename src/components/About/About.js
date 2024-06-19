import React from 'react';
import './About.css';
import chichaImage from '../../assets/about/colored-corn.png';

const About = () => (
  <section className="info">
    <h2>Chicha Morada, c'est quoi ?</h2>
    <div className="content">
      <div className="text">
        <h3>Une boisson emblématique 100% péruvienne</h3>
        <p>Nous produisons localement la chicha morada, une boisson artisanale très appréciée au Pérou. Faite à base de maïs violet, de fruits, de cannelle et de clou de girofle.</p>
        <button className="learn-more-button">En savoir plus</button>
      </div>
      <div className="image-container">
        <img src={chichaImage} alt="Chicha Morada" />
      </div>
    </div>
  </section>
);

export default About;
