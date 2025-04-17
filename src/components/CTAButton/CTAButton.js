import React from 'react';
import './CTAButton.css';

const CTAButton = ({ 
  text, 
  type = 'primary', 
  onClick, 
  trackingId,
  className = '',
  icon
}) => {
  const handleClick = () => {
    if (trackingId) {
      // Analytics tracking implementation
      console.log(`Button clicked: ${trackingId}`);
    }
    onClick && onClick();
  };

  return (
    <button 
      className={`cta-button ${type} ${className}`}
      onClick={handleClick}
      aria-label={text}
    >
      {icon && <span className={`button-icon icon-${icon}`}></span>}
      <span className="button-text">{text}</span>
      <span className="button-hover-effect"></span>
    </button>
  );
};

export default CTAButton;
