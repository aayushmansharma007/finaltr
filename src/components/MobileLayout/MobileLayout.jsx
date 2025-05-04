import React, { useState } from 'react';
import './MobileLayout.css';
import MobileHome from './sections/MobileHome';
import MobileAbout from './sections/MobileAbout';
import MobileServices from './sections/MobileServices';
import MobileContact from './sections/MobileContact';

const MobileLayout = () => {
  const [activeSection, setActiveSection] = useState('home');

  const renderActiveSection = () => {
    switch(activeSection) {
      case 'home':
        return <MobileHome />;
      case 'about':
        return <MobileAbout />;
      case 'services':
        return <MobileServices />;
      case 'contact':
        return <MobileContact />;
      default:
        return <MobileHome />;
    }
  };

  return (
    <div className="mobile-layout">
      <div className="mobile-content">
        {renderActiveSection()}
      </div>
      
      <nav className="mobile-nav">
        <button 
          className={`nav-item ${activeSection === 'home' ? 'active' : ''}`}
          onClick={() => setActiveSection('home')}
        >
          <span className="icon">🏠</span>
          <span className="label">Home</span>
        </button>
        
        <button 
          className={`nav-item ${activeSection === 'about' ? 'active' : ''}`}
          onClick={() => setActiveSection('about')}
        >
          <span className="icon">ℹ️</span>
          <span className="label">About</span>
        </button>
        
        <button 
          className={`nav-item ${activeSection === 'services' ? 'active' : ''}`}
          onClick={() => setActiveSection('services')}
        >
          <span className="icon">🛠️</span>
          <span className="label">Services</span>
        </button>
        
        <button 
          className={`nav-item ${activeSection === 'contact' ? 'active' : ''}`}
          onClick={() => setActiveSection('contact')}
        >
          <span className="icon">📞</span>
          <span className="label">Contact</span>
        </button>
      </nav>
    </div>
  );
};

export default MobileLayout;
