import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Order.css';

const Order = () => {
  const [formData, setFormData] = useState({
    name: '',
    prenom: '',
    adresse: '',
    email: '',
    telephone: '',
    boisson: '',
    caissettes: '1',
    bouteilles: '16 bouteilles 1l',
    message: '',
    date: '',
    time: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const currentDate = new Date();
    const date = currentDate.toLocaleDateString();
    const time = currentDate.toLocaleTimeString();

    const formDataWithDateTime = {
      ...formData,
      date,
      time
    };

    emailjs.send(
      'service_cozco_2glxt2g',
      'template_qj2yvy6',
      formDataWithDateTime,
      'GrqY7nKVhCnvqc8Hm'
    ).then((response) => {
      toast.success('Email sent successfully!');
      
      setFormData({
        name: '',
        prenom: '',
        adresse: '',
        email: '',
        telephone: '',
        boisson: '',
        caissettes: '1',
        bouteilles: '16 bouteilles 1l',
        message: '',
        date: '',
        time: ''
      });
    }).catch((error) => {
      toast.error('There was an error sending the email!');
      console.error('EmailJS Error:', error);
    });
  };

  return (
    <section id="order" className="order-section">
      <ToastContainer />
      <div className="order-container">
        <h2>Passer commande</h2>
        <p>Vous souhaitez commander nos boissons ? Merci de remplir le formulaire ci-dessous !</p>
        <p className="order-note">Pour information : nous ne vendons pas nos boissons à l'unité, nous les vendons par caissettes</p>
        <p>(16 bouteilles de 1L ou 32 bouteilles de 50cl)</p>
        <form className="order-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Nom*</label>
              <input type="text" id="name" name="name" placeholder="Nom" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="prenom">Prénom*</label>
              <input type="text" id="prenom" name="prenom" placeholder="Votre prénom" value={formData.prenom} onChange={handleChange} required />
            </div>
          </div>
          <div className="form-group full-width">
            <label htmlFor="adresse">Votre adresse</label>
            <input type="text" id="adresse" name="adresse" placeholder="Votre adresse" value={formData.adresse} onChange={handleChange} />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">E-mail*</label>
              <input type="email" id="email" name="email" placeholder="Votre e-mail" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="telephone">Numéro de téléphone*</label>
              <input type="tel" id="telephone" name="telephone" placeholder="Votre numéro de téléphone" value={formData.telephone} onChange={handleChange} required />
            </div>
          </div>
          <div className="form-row align-items-center">
            <div className="form-group">
              <label>Choix de boisson*</label>
              <div className="radio-group">
                <label>
                  <input type="radio" name="boisson" value="chicha-morada" checked={formData.boisson === 'chicha-morada'} onChange={handleChange} required />
                  Chicha Morada
                </label>
                <label>
                  <input type="radio" name="boisson" value="maracuya" checked={formData.boisson === 'maracuya'} onChange={handleChange} />
                  Maracuya
                </label>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="caissettes">Nombre de caissettes*</label>
              <input type="number" id="caissettes" name="caissettes" min="1" value={formData.caissettes} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="bouteilles">Nombre de bouteilles*</label>
              <select id="bouteilles" name="bouteilles" value={formData.bouteilles} onChange={handleChange} required>
                <option value="16 bouteilles 1l">16</option>
                <option value="32 bouteilles 50cl">32</option>
              </select>
            </div>
          </div>
          <div className="form-group full-width">
            <label htmlFor="message">Votre message*</label>
            <textarea id="message" name="message" placeholder="Votre message" value={formData.message} onChange={handleChange} required></textarea>
          </div>
          <button type="submit" className="order-button-submit">Envoyer</button>
        </form>
      </div>
    </section>
  );
};

export default Order;
