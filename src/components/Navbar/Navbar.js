import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`header ${menuOpen ? 'active' : ''}`}>
      <div className="logo">
        <img src="/cozco-logo.png" alt="Cozco Chicha Morada logo" />
      </div>
      <div className="menu-toggle" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="nav-button-container">
        <nav>
          <ul>
            <li>Produits</li>
            <li>Où nous trouver ?</li>
          </ul>
        </nav>
        <button className="order-button">Passer commande</button>
      </div>
    </header>
  );
};

export default Navbar;
