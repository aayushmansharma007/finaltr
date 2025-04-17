import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="main-nav">
      <div className="nav-container">
        <Logo />
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
