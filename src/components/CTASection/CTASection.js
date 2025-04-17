import React from 'react';
import CTAButton from '../CTAButton/CTAButton';
import './CTASection.css';

const CTASection = ({ title, buttons }) => {
  return (
    <section className="cta-section">
      <h2>{title}</h2>
      <div className="cta-buttons">
        {buttons.map((button, index) => (
          <CTAButton
            key={index}
            text={button.text}
            type={button.type}
            trackingId={button.trackingId}
          />
        ))}
      </div>
    </section>
  );
};

export default CTASection;