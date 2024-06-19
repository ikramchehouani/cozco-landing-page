import React from 'react';
import './Gallery.css';
import firstImage from '../../assets/gallery/two-chicha-morada-bottles.png';
import secondImage from '../../assets/gallery/maracuya-glass.png';
import thirdImage from '../../assets/gallery/chicha-morada-in-the-clouds.png';
import alpaca from '../../assets/gallery/alpaca.png';

const Gallery = () => (
  <section className="gallery">
    <div className="gallery-images">
      <div className="small-images">
        <img src={firstImage} alt="Image 1" className="gallery-image" />
        <img src={secondImage} alt="Image 2" className="gallery-image" />
      </div>
      <img src={thirdImage} alt="Image 3" className="gallery-image large-image" />
    </div>
    <div className="gallery-alpaca">
      <img src={alpaca} alt="Alpaca" />
    </div>
  </section>
);

export default Gallery;
