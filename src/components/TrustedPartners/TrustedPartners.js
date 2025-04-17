import React from 'react';
import './TrustedPartners.css';

const TrustedPartners = () => {
  const partners = [
    { name: 'Partner 1', logo: '/assets/images/partners/partner1.png' },
    { name: 'Partner 2', logo: '/assets/images/partners/partner2.png' },
    { name: 'Partner 3', logo: '/assets/images/partners/partner3.png' },
    // Add more partners as needed
  ];

  return (
    <section className="trusted-partners">
      <h2>Trusted By Industry Leaders</h2>
      <div className="partners-grid">
        {partners.map((partner, index) => (
          <div key={index} className="partner-logo">
            <img src={partner.logo} alt={partner.name} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustedPartners;