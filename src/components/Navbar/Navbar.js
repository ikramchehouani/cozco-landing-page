import React from 'react';
import './Navbar.css';

const Navbar = () => (
  <header className="header">
    <div className="logo">
      <img src="/cozco-logo.png" alt="Cozco Chicha Morada" />
    </div>
    <nav>
      <ul>
        <li>Accueil</li>
        <li>Produits</li>
        <li>Où nous trouver ?</li>
      </ul>
    </nav>
    <button className="order-button">Passer commande</button>
  </header>
);

export default Navbar;
