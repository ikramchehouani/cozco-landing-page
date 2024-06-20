import React from 'react';
import './History.css';
import peopleImage from '../../assets/history/peruvian-girls-with-lama.jpg';

const History = () => (
  <section className="info">
    <h2>Le temps et l'histoire</h2>
    <div className="content">
      <div className="text">
        <h3>La chicha morada, un héritage de l’empire inca ?</h3>
        <p>
          Selon la tradition, la Chicha Morada a été découverte après l'inondation d'entrepôts contenant des récoltes de maïs violet, provoquant ainsi un maltage partiel.
        </p>
        <p>
          Les Incas refusèrent alors de jeter le maïs et préférèrent goûter la boisson nouvellement obtenue. Ainsi est née cette  boisson péruvienne délicieuse et familiale, à savourer avec un bon ceviche ! 
        </p>
      </div>
      <div className="image-container">
        <img src={peopleImage} alt="Peruvian girls with a lama" />
      </div>
    </div>
  </section>
);

export default History;