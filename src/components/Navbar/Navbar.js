import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
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
      {menuOpen && <div className="overlay" onClick={closeMenu}></div>}
      <div className={`nav-button-container ${menuOpen ? 'open' : ''}`}>
        <nav>
          <ul>
            <li>
              <Link to="/boissons" onClick={closeMenu}>Boissons</Link>
            </li>
            <li>
              <Link to="/restaurants" onClick={closeMenu}>Où nous trouver ?</Link>
            </li>
          </ul>
        </nav>
        <ScrollLink to="order" smooth={true} duration={700} className="order-button" onClick={closeMenu}>
          Passer commande
        </ScrollLink>
        {menuOpen && (
          <button className="close-button" onClick={closeMenu}>
            X
          </button>
        )}
      </div>
    </header>
  );
};

export default Navbar;
