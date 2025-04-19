import React, { useState, useCallback, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../Logo';
import './Navigation.css';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Handle scroll locking
  const toggleScrollLock = useCallback((lock) => {
    document.body.style.overflow = lock ? 'hidden' : 'auto';
    document.body.style.touchAction = lock ? 'none' : 'auto';
  }, []);

  // Close menu and scroll to top when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    toggleScrollLock(false);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [location, toggleScrollLock]);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => {
      const newState = !prev;
      toggleScrollLock(newState);
      return newState;
    });
  }, [toggleScrollLock]);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
    toggleScrollLock(false);
  }, [toggleScrollLock]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      toggleScrollLock(false);
    };
  }, [toggleScrollLock]);

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




