import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';
import './Navigation.css';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'auto';
  }, [isMenuOpen]);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
  }, []);

  return (
    <nav className="main-nav">
      <div className="nav-container">
        <Link to="/" className="logo-container" onClick={closeMenu}>
          <Logo />
        </Link>

        <button 
          className={`hamburger-menu ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/about" onClick={closeMenu}>About</Link></li>
          <li><Link to="/services" onClick={closeMenu}>Services</Link></li>
          <li><Link to="/careers" onClick={closeMenu}>Careers</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default React.memo(Navigation);

