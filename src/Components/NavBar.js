// src/components/TransparentNavbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const TransparentNavbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light fixed-top"
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0)', // semi-transparent white
        backdropFilter: 'blur(10px)', // optional glassmorphism
        borderBottom: '1px solid rgba(255, 255, 255, 0)',
      }}
    >
      <div className="container">
        <Link className="navbar-brand text-dark" to="/">CURIGEN</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/services">Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default TransparentNavbar;

