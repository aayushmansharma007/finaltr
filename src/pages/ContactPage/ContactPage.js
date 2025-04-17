import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactTabs from '../../components/ContactTabs/ContactTabs';
import MapSection from '../../components/MapSection/MapSection';
import SocialLinks from '../../components/SocialLinks/SocialLinks';
import './ContactPage.css';

const ContactPage = () => {
  const [activeTab, setActiveTab] = useState('general');

  const contactInfo = {
    general: {
      title: "General Inquiry",
      description: "Looking to transform your business with innovative tech solutions? Let's discuss your needs.",
      email: "hello@lanos.tech",
      phone: "+1 (555) 123-4567"
    },
    government: {
      title: "Government Partnership",
      description: "Partner with us for secure, scalable government technology solutions.",
      email: "gov@lanos.tech",
      phone: "+1 (555) 234-5678"
    },
    investor: {
      title: "Investor Relations",
      description: "Explore investment opportunities in our growing technology venture.",
      email: "invest@lanos.tech",
      phone: "+1 (555) 345-6789"
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Lanos IT - Let's Build Something Remarkable Together</title>
        <meta 
          name="description" 
          content="Connect with Lanos IT for enterprise solutions, government partnerships, and investment opportunities. Let's build something remarkable together." 
        />
      </Helmet>

      <main className="contact-page">
        <section className="contact-hero">
          <h1>Let's Build Something Remarkable Together</h1>
          <p className="hero-subtitle">
            Whether you're looking for an IT partner, a public-private digital collaborator, or an investor meeting — we're just a click away.
          </p>
        </section>

        <div className="contact-content">
          <ContactTabs 
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />

          <div className="contact-grid">
            <div className="contact-form-section">
              <div className="contact-info">
                <h2>{contactInfo[activeTab].title}</h2>
                <p>{contactInfo[activeTab].description}</p>
                <div className="contact-details">
                  <div className="detail-item">
                    <span className="icon">✉️</span>
                    <a href={`mailto:${contactInfo[activeTab].email}`}>
                      {contactInfo[activeTab].email}
                    </a>
                  </div>
                  <div className="detail-item">
                    <span className="icon">📞</span>
                    <a href={`tel:${contactInfo[activeTab].phone}`}>
                      {contactInfo[activeTab].phone}
                    </a>
                  </div>
                </div>
              </div>

              <ContactForm inquiryType={activeTab} />
            </div>

            <div className="location-section">
              <h2>Visit Our Office</h2>
              <address>
                <p>123 Tech Boulevard</p>
                <p>Innovation District</p>
                <p>San Francisco, CA 94105</p>
              </address>
              <MapSection />
              <div className="social-links-wrapper">
                <SocialLinks />
              </div>
            </div>
          </div>
        </div>

        <footer className="contact-footer">
          <div className="footer-links">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
            <a href="/security">Security</a>
          </div>
        </footer>
      </main>
    </>
  );
};

export default ContactPage;
