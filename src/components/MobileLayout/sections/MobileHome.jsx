import React from 'react';
import './MobileSections.css';

const MobileHome = () => {
  return (
    <div className="mobile-section">
      <div className="mobile-hero">
        <h1>Lanos</h1>
        <h2>Agile EdTech & Innovation</h2>
        <p>Transforming education through innovative technology solutions</p>
        
        <div className="mobile-cta">
          <button className="primary-btn">Get Started</button>
        </div>
      </div>
      
      <div className="mobile-features">
        <div className="feature-card">
          <div className="feature-icon">🚀</div>
          <h3>Innovative Solutions</h3>
          <p>Cutting-edge educational technology for modern learning</p>
        </div>
        
        <div className="feature-card">
          <div className="feature-icon">🔄</div>
          <h3>Agile Development</h3>
          <p>Rapid, iterative approach to deliver value faster</p>
        </div>
        
        <div className="feature-card">
          <div className="feature-icon">🎓</div>
          <h3>EdTech Expertise</h3>
          <p>Specialized knowledge in educational technology</p>
        </div>
      </div>
    </div>
  );
};

export default MobileHome;
