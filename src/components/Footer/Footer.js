import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-logo">
        <img src="/cozco-logo.png" alt="Cozco Chicha Morada" />
      </div>
      <div className="footer-links">
        <ul>
          <li>Accueil</li>
          <li>Produits</li>
        </ul>
        <ul>
          <li>Où nous trouver ?</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="footer-contact">
        <h3>CONTACTEZ-NOUS</h3>
        <p>Jorge Mellado - Président</p>
        <p>Téléphone : 06 64 31 68 83</p>
        <p>Mail : contact.cozco@gmail.com</p>
      </div>
    </div>
    <div className="footer-bottom">
      <p>&copy;Cozco 2024 - Mention légales - Politique de confidentialité</p>
    </div>
  </footer>
);

export default Footer;
