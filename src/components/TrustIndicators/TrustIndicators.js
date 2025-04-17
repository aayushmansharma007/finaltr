import React from 'react';
import './TrustIndicators.css';

const TrustIndicators = () => {
  return (
    <section className="trust-indicators">
      <div className="certifications">
        <h3>Certifications & Compliance</h3>
        <div className="cert-grid">
          <div className="cert-item">ISO 27001</div>
          <div className="cert-item">CMMI Level 5</div>
          <div className="cert-item">SOC 2 Type II</div>
        </div>
      </div>
      
      <div className="press-mentions">
        <h3>Featured In</h3>
        <div className="press-grid">
          {/* Add press logos here */}
        </div>
      </div>
      
      <div className="metrics">
        <div className="metric-item">
          <h4>98%</h4>
          <p>Client Retention</p>
        </div>
        <div className="metric-item">
          <h4>150+</h4>
          <p>Enterprise Projects</p>
        </div>
        <div className="metric-item">
          <h4>24/7</h4>
          <p>Support Coverage</p>
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;