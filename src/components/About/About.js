import React from 'react';
import './About.css';
import chichaImage from '../../assets/about/colored-corn.png';

const About = () => (
  <section className="info">
    <h2>Chicha Morada, c'est quoi ?</h2>
    <div className="content">
      <div className="text">
        <h3>Une boisson emblématique 100% péruvienne !</h3>
        <p>
          Nous produisons localement la chicha morada, une boisson artisanale particulièrement appréciée au Pérou. 
        </p>
        <p>
          Faite à base de fruits, de cannelle, de clou de girofle et surtout de maïs violet récolté dans les montagnes des Andes, son goût unique vous fera voyager à chaque gorgée !
        </p>
        <button className="learn-more-button">En savoir plus</button>
      </div>
      <div className="image-container">
        <img src={chichaImage} alt="Chicha Morada" />
      </div>
    </div>
  </section>
);

export default About;
