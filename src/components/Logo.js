import React from 'react';
import logoFull from '../assets/images/logo-full.png';
import logoSmall from '../assets/images/logo-small.png';
import './Logo.css';

const Logo = () => {
  return (
    <div className="logo-container logo-animation">
      <a href="/" className="logo-link">
        <img 
          src={logoFull} 
          alt="Lanos IT Solutions Logo" 
          className="logo-full"
        />
        <img 
          src={logoSmall} 
          alt="Lanos IT Solutions Logo" 
          className="logo-small"
        />
      </a>
    </div>
  );
};

export default Logo;

