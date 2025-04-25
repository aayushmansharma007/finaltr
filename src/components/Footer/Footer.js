import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../Modal/Modal';
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import './Footer.css';

const Footer = () => {
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);

  const handleRegistrationClick = (e) => {
    e.preventDefault();
    setShowRegistrationForm(true);
  };

  return (
    <footer className="main-footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Lanos IT Solutions</h3>
          <p>Transforming enterprises through innovative technology solutions</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li>
              <button 
                className="footer-register-link"
                onClick={handleRegistrationClick}
              >
                Register
              </button>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: contact@lanos.tech</p>
          <p>Phone: +1 (555) 123-4567</p>
          <p>Address: 123 Tech Street, Innovation City</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Lanos IT Solutions. All rights reserved.</p>
      </div>

      {showRegistrationForm && (
        <Modal onClose={() => setShowRegistrationForm(false)}>
          <RegistrationForm onClose={() => setShowRegistrationForm(false)} />
        </Modal>
      )}
    </footer>
  );
};

export default Footer;


