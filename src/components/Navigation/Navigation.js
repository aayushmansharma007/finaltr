import React, { useState, useCallback, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../Logo';
import Modal from '../Modal/Modal';
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import './Navigation.css';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const location = useLocation();

  // Handle scroll visibility
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const visible = prevScrollPos > currentScrollPos || currentScrollPos < 10;

      setPrevScrollPos(currentScrollPos);
      setVisible(visible);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

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

  // Add this function to handle animation delays
  const getNavItemDelay = (index) => {
    return { '--i': index };
  };

  return (
    <nav className={`main-nav ${visible ? 'nav-visible' : 'nav-hidden'}`}>
      <div className="nav-container">
        <Link to="/" className="logo-container" onClick={closeMenu}>
          <Logo />
        </Link>

        <button 
          className={`hamburger-menu ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li style={getNavItemDelay(1)}><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li style={getNavItemDelay(2)}><Link to="/about" onClick={closeMenu}>About</Link></li>
          <li style={getNavItemDelay(3)}><Link to="/services" onClick={closeMenu}>Services</Link></li>
          <li style={getNavItemDelay(4)}><Link to="/careers" onClick={closeMenu}>Careers</Link></li>
          <li style={getNavItemDelay(5)}><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
          <li style={getNavItemDelay(6)}>
            <button 
              className="register-btn"
              onClick={() => {
                closeMenu();
                setShowRegistrationForm(true);
              }}
            >
              Register
            </button>
          </li>
        </ul>
      </div>

      {showRegistrationForm && (
        <Modal onClose={() => setShowRegistrationForm(false)}>
          <RegistrationForm onClose={() => setShowRegistrationForm(false)} />
        </Modal>
      )}
    </nav>
  );
};

export default React.memo(Navigation);







