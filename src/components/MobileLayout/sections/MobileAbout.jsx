import React from 'react';
import './MobileSections.css';

const MobileAbout = () => {
  return (
    <div className="mobile-section">
      <h2>About Lanos</h2>
      <p>We're on a mission to transform education through innovative technology solutions.</p>
      
      <div className="about-content">
        <h3>Our Story</h3>
        <p>
          Founded in 2020, Lanos emerged from a passion for combining education and technology.
          Our team of educators and developers work together to create solutions that make
          learning more accessible, engaging, and effective.
        </p>
        
        <h3>Our Vision</h3>
        <p>
          We envision a world where quality education is accessible to everyone, powered by
          technology that adapts to individual learning styles and needs.
        </p>
      </div>
    </div>
  );
};

export default MobileAbout;
