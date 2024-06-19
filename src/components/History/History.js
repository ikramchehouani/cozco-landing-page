import React from 'react';
import './History.css';
import peopleImage from '../../assets/history/peruvian-girls-with-lama.jpg';

const History = () => (
  <section className="info">
    <h2>Le temps et l'histoire</h2>
    <div className="content">
      <div className="text">
        <h3>TITRE</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <button className="learn-more-button">En savoir plus</button>
      </div>
      <div className="image-container">
        <img src={peopleImage} alt="Peruvian girls with a lama" />
      </div>
    </div>
  </section>
);

export default History;