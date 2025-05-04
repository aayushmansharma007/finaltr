import React, { useState } from 'react';
import './MobileSections.css';

const MobileContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="mobile-section">
      <h2>Contact Us</h2>
      <p>Get in touch with our team</p>
      
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        
        <button type="submit" className="primary-btn">Send Message</button>
      </form>
      
      <div className="contact-info">
        <div className="contact-method">
          <span className="contact-icon">📧</span>
          <span>info@lanos.tech</span>
        </div>
        
        <div className="contact-method">
          <span className="contact-icon">📱</span>
          <span>+1 (555) 123-4567</span>
        </div>
        
        <div className="contact-method">
          <span className="contact-icon">📍</span>
          <span>123 Tech Avenue, San Francisco, CA</span>
        </div>
      </div>
    </div>
  );
};

export default MobileContact;
