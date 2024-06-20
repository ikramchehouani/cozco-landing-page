import React from 'react';
import './Order.css';

const Order = () => (
  <section id="order" className="order-section">
    <div className="order-container">
      <h2>Passer commande</h2>
      <p>Vous souhaitez effectuer une commande de caissette de boisson, merci de remplir le formulaire.</p>
      <p className="order-note">Pour rappel* : les boissons ne sont pas vendus par unité et une caissette contient 16 bouteilles de 1 litres</p>
      <form className="order-form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">Nom*</label>
            <input type="text" id="name" name="name" placeholder="Nom" required />
          </div>
          <div className="form-group">
            <label htmlFor="prenom">Prénom*</label>
            <input type="text" id="prenom" name="prenom" placeholder="Votre prénom" required />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="email">E-mail*</label>
            <input type="email" id="email" name="email" placeholder="Votre e-mail" required />
          </div>
          <div className="form-group">
            <label htmlFor="caissettes">Nombre de caissettes*</label>
            <input type="text" id="caissettes" name="caissettes" placeholder="1 caissette de CHICHA MORADA - 1 LITRE" required />
          </div>
        </div>
        <div className="form-group full-width">
          <label htmlFor="message">Votre message*</label>
          <textarea id="message" name="message" placeholder="Votre message" required></textarea>
        </div>
        <button type="submit" className="order-button-submit">Envoyer</button>
      </form>
    </div>
  </section>
);

export default Order;
