import React from 'react';
import bgImage from '../Assets/Hero.jpg'; // Make sure the path is correct
import './Home.css';
import TransparentNavbar from '../Components/NavBar';
const Home = () => {
  return (
    <div className="home-hero" style={{ backgroundImage: `url(${bgImage})` }}>
      <TransparentNavbar></TransparentNavbar>
    </div>
  );
};

export default Home;
