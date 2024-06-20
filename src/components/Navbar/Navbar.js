import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`header ${menuOpen ? 'active' : ''}`}>
      <div className="logo">
        <Link to="/" className="logo">
          <img src="/cozco-logo.png" alt="Cozco Chicha Morada logo" />
        </Link>
      </div>
      <div className="menu-toggle" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="nav-button-container">
        <nav>
          <ul>
            <li>
              <Link to="/boissons">Boissons</Link>
            </li>
            <li>
              <Link to="/restaurants">Où nous trouver ?</Link>
            </li>
          </ul>
        </nav>
        <ScrollLink to="order" smooth={true} duration={700} className="order-button">
          Passer commande
        </ScrollLink>
      </div>
    </header>
  );
};

export default Navbar;
