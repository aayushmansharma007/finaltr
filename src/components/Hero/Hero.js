import React, { useState, useRef } from 'react';
import Modal from '../Modal/Modal';
import ConsultationForm from '../ConsultationForm/ConsultationForm';
import CTAButton from '../CTAButton/CTAButton';
import './Hero.css';

const Hero = () => {
  const [showConsultationForm, setShowConsultationForm] = useState(false);
  const titleRef = useRef(null);

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="animated-background"></div>
        <h1 ref={titleRef} className="hero-title">
          <span className="gradient-text">Powering India's</span>
          <br />
          <span className="typing-text">Tech Evolution</span>
        </h1>
        <p className="hero-subtitle animate-fade-slide-up">
          End-to-end IT solutions for enterprises, governments, and visionary investors.
        </p>
        <div className="hero-cta-group">
          <CTAButton 
            text="Schedule Consultation" 
            type="primary"
            trackingId="hero_consultation_btn"
            className="animate-ripple"
            onClick={() => setShowConsultationForm(true)}
          />
          <CTAButton 
            text="Download Investor Deck" 
            type="secondary"
            trackingId="hero_investor_btn"
            icon="download"
          />
        </div>
      </div>

      {showConsultationForm && (
        <Modal onClose={() => setShowConsultationForm(false)}>
          <ConsultationForm onClose={() => setShowConsultationForm(false)} />
        </Modal>
      )}
    </section>
  );
};

export default Hero;







