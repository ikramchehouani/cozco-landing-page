import React from 'react';
import './Gallery.css';
import image1 from '../../assets/gallery/image1.png'; // Adjust the path as needed
import image2 from '../../assets/gallery/image3.jpg'; // Adjust the path as needed
import image3 from '../../assets/gallery/image2.jpg'; // Adjust the path as needed
import alpaca from '../../assets/gallery/image4.png'; // Adjust the path as needed

const Gallery = () => (
  <section className="gallery">
    <div className="gallery-images">
      <img src={image1} alt="Image 1" className="gallery-image" />
      <img src={image2} alt="Image 2" className="gallery-image" />
      <img src={image3} alt="Image 3" className="gallery-image" />
    </div>
    <div className="gallery-alpaca">
      <img src={alpaca} alt="Alpaca" />
    </div>
  </section>
);

export default Gallery;
