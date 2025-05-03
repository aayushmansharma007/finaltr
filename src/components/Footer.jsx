import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 style={{ color: 'var(--primary-color)' }}>Quick Links</h3>
            <ul>
              <li><a href="#about" style={{ color: 'var(--text-color)', transition: 'color 0.3s' }} className="footer-link">About Us</a></li>
              <li><a href="#services" style={{ color: 'var(--text-color)', transition: 'color 0.3s' }} className="footer-link">Services</a></li>
              <li><a href="#research" style={{ color: 'var(--text-color)', transition: 'color 0.3s' }} className="footer-link">Research</a></li>
              <li><a href="#benefits" style={{ color: 'var(--text-color)', transition: 'color 0.3s' }} className="footer-link">Benefits</a></li>
              <li><a href="#testimonials" style={{ color: 'var(--text-color)', transition: 'color 0.3s' }} className="footer-link">Testimonials</a></li>
              <li><a href="#contact" style={{ color: 'var(--text-color)', transition: 'color 0.3s' }} className="footer-link">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3 style={{ color: 'var(--primary-color)' }}>Contact</h3>
            <p>Email: contact@lanos.io</p>
            <p>Phone: +91-12345-67890</p>
            <p>Address: 123 Tech Park, Sagar, Madhya Pradesh, India</p>
          </div>
          <div className="footer-section">
            <h3 style={{ color: 'var(--primary-color)' }}>Follow Us</h3>
            <div className="social-links">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link" style={{ color: 'var(--light-text)', transition: 'color 0.3s' }}>
                LinkedIn
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link" style={{ color: 'var(--light-text)', transition: 'color 0.3s' }}>
                Twitter
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-link" style={{ color: 'var(--light-text)', transition: 'color 0.3s' }}>
                YouTube
              </a>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>© {new Date().getFullYear()} Lanos. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer


