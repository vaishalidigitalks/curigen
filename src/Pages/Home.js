import React from 'react';
import bgImage from '../Assets/Hero.jpg'; // Make sure the path is correct
import './Home.css';

const Home = () => {
  return (
    <div className="home-hero" style={{ backgroundImage: `url(${bgImage})` }}>
      
    </div>
  );
};

export default Home;
