import React from 'react';
import './Navbar.css';

const Navbar = () => (
  <header className="header">
    <div className="logo">
      <img src="/cozco-logo.png" alt="Cozco Chicha Morada" />
    </div>
    <div className="nav-button-container">
      <nav>
        <ul>
          <li>Produits</li>
          <li>Où nous trouver ?</li>
        </ul>
      </nav>
      <button className="order-button">PASSER COMMANDE</button>
    </div>
  </header>
);

export default Navbar;
