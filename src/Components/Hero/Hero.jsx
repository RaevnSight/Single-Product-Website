import React from 'react';
import './Hero.css';
import hero_image from '../Assets/peanut_butter.png';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <div>
          <p>Homemade</p>
          <p>Peanut</p>
          <p>Butter</p>
        </div>
        <div className="hero-product-btn">
          <div>Order Now!</div>
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="Peanut Butter" />
      </div>
    </div>
  );
};

export default Hero;
