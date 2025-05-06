import React from 'react';
import heroImage from '../Assets/Hero.png';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>The Pursuit of a Healthier <span>Bharat</span> Fueled by Science</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br />
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
        </p>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="Medicine Basket" />
        <div className="badge">
          <span role="img" aria-label="truck">🚚</span> <strong>Free</strong> Delivery
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
