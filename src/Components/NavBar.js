// src/components/TransparentNavbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const TransparentNavbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg fixed-top"
      style={{
        backgroundColor: 'transparent',  // Fully transparent
        borderBottom: 'none',
        zIndex: 1030
      }}
    >
      <div className="container">
        <Link
          className="navbar-brand"
          to="/"
          style={{ color: '#03A297', fontWeight: 'bold' }}
        >
          CURIGEN
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {['Home', 'About', 'Products', 'Contact'].map((text, index) => (
              <li className="nav-item" key={index}>
                <Link className="nav-link" to={`/${text.toLowerCase()}`} style={{ color: '#03A297' }}>
                  {text}
                </Link>
              </li>
            ))}

            {/* Services Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="servicesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ color: '#03A297' }}
              >
                Services
              </a>
              <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
                {[
                  ['Contact Manufacturing', 'contactManufacturing'],
                  ['3rd Party Manufacturing', '3rdPartyManufacturing'],
                  ['Institutional Tenders', 'institutionalTenders'],
                  ['Generic Medicine', 'genericMedicine'],
                  ['OTC Products', 'OTCProducts'],
                  ['Regulatory Services', 'regulatoryservices'],
                  ['QC/QA', 'QC/QA']
                ].map(([label, path], i) => (
                  <li key={i}>
                    <Link className="dropdown-item" to={`/services/${path}`}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default TransparentNavbar;
