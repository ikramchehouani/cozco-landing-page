import React from 'react';
import './About.css';
import chichaImage from '../../assets/about/colored-corn.png';

const About = () => (
  <section className="info">
    <h2>CHICHA MORADA, C’EST QUOI ?</h2>
    <div className="content">
      <div className="text">
        <h3>TITRE</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <button className="learn-more-button">En savoir plus</button>
      </div>
      <div className="image-container">
        <img src={chichaImage} alt="Chicha Morada" />
      </div>
    </div>
  </section>
);

export default About;