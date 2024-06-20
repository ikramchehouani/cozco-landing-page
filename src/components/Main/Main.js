import React from 'react';
import { Link } from 'react-scroll';
import './Main.css';

const Main = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Le soleil du Pérou en bouteille</h1>
        <p>
          Fraîchement préparée en région parisienne, notre Chicha Morada de Cozco est une invitation à découvrir les saveurs authentiques du Pérou dans chaque gorgée. 
        </p>
        <p>
          Partagez avec nous un moment de pur plaisir et de gourmandise !
        </p>
        <Link to="about" smooth={true} duration={700} className="discover-button">
          Je découvre
        </Link>
      </div>
    </section>
  );
};

export default Main;
