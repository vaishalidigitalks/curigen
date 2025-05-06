// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const Header = () => (
  <header style={{ position: 'absolute', top: 0, width: '100%', zIndex: 10 }}>
    <div className="py-2 border-bottom" style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)' }}>
      <Container className="d-flex justify-content-between text-dark">
        <small>📧 info@example.com</small>
        <small>📞 +2 123 654 7898</small>
      </Container>
    </div>

    <div className="border-bottom" style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
      <Container className="d-flex justify-content-between align-items-center py-3">
        <h4 className="mb-0">
          <Link to="/" className="text-decoration-none text-dark">CURIGEN</Link>
        </h4>

        <ul className="nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/global-presence">Global Presence</Link>
          </li>

          <li className="nav-item dropdown">
            <a href="#" className="nav-link dropdown-toggle" id="productsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Products
            </a>
            <ul className="dropdown-menu" aria-labelledby="productsDropdown">
              <li><Link className="dropdown-item" to="/products/tablet">All</Link></li>
              <li><Link className="dropdown-item" to="/products/tablet">Tablet</Link></li>
              <li><Link className="dropdown-item" to="/products/capsule">Capsule</Link></li>
              <li><Link className="dropdown-item" to="/products/injection">Injection</Link></li>
              <li><Link className="dropdown-item" to="/products/injection">Suspension/Syrup</Link></li>
              <li><Link className="dropdown-item" to="/products/injection">Eye/Ear/Drop</Link></li>
              <li><Link className="dropdown-item" to="/products/injection">Other</Link></li>
            </ul>
          </li>

          <li className="nav-item dropdown">
            <a href="#" className="nav-link dropdown-toggle" id="servicesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Services
            </a>
            <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
              <li><Link className="dropdown-item" to="/services/contactManufacturing">Contact Manufacturing</Link></li>
              <li><Link className="dropdown-item" to="/services/3rdPartyManufacturing">3rd Party Manufacturing</Link></li>
              <li><Link className="dropdown-item" to="/services/institutionalTenders">Institutional Tenders</Link></li>
              <li><Link className="dropdown-item" to="/services/genericMedicine">Generic Medicine</Link></li>
              <li><Link className="dropdown-item" to="/services/OTCProducts">OTC Products</Link></li>
              <li><Link className="dropdown-item" to="/services/regulatoryservices">Regulatory Services</Link></li>
              <li><Link className="dropdown-item" to="/services/QC/QA">QC/QA</Link></li>
            </ul>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/gallery">Gallery</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about-us">About Us</Link>
          </li>
        </ul>
      </Container>
    </div>
  </header>
);

export default Header;
