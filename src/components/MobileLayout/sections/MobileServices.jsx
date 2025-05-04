import React from 'react';
import './MobileSections.css';

const MobileServices = () => {
  return (
    <div className="mobile-section">
      <h2>Our Services</h2>
      <p>Specialized solutions for education and technology</p>
      
      <div className="mobile-services-list">
        <div className="service-item">
          <h3>EdTech Development</h3>
          <p>
            Custom educational technology solutions designed to enhance learning experiences
            and improve educational outcomes.
          </p>
        </div>
        
        <div className="service-item">
          <h3>Learning Management Systems</h3>
          <p>
            Comprehensive platforms for course creation, student management, and
            performance tracking.
          </p>
        </div>
        
        <div className="service-item">
          <h3>Interactive Learning Tools</h3>
          <p>
            Engaging applications that make learning fun and effective through
            gamification and interactive content.
          </p>
        </div>
        
        <div className="service-item">
          <h3>Educational Analytics</h3>
          <p>
            Data-driven insights to help educators understand student performance
            and optimize teaching methods.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MobileServices;
