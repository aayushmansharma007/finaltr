import React from 'react';
import './Certifications.css';

const Certifications = () => {
  const certifications = [
    {
      name: 'ISO 27001',
      description: 'Information Security Management',
      year: '2022'
    },
    {
      name: 'CMMI Level 5',
      description: 'Capability Maturity Model Integration',
      year: '2023'
    },
    {
      name: 'SOC 2 Type II',
      description: 'Service Organization Control',
      year: '2023'
    }
  ];

  return (
    <section className="certifications-section">
      <h2>Our Certifications</h2>
      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <div key={index} className="certification-card">
            <h3>{cert.name}</h3>
            <p className="cert-description">{cert.description}</p>
            <span className="cert-year">Achieved: {cert.year}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;