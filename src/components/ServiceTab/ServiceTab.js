import React from 'react';
import './ServiceTab.css';

const ServiceTab = ({ data, type }) => {
  return (
    <div className="service-tab">
      <div className="service-header">
        <span className="service-icon">{data.icon}</span>
        <h1>{data.title}</h1>
      </div>

      <div className="service-hero">
        <h2>{data.header}</h2>
        <p className="service-body">{data.body}</p>
      </div>

      {type === 'investor' ? (
        <div className="investor-section">
          <h3>Investor Highlights</h3>
          <ul className="highlights-list">
            {data.highlights.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>
          <button className="download-deck">
            Download Investor Deck
          </button>
        </div>
      ) : (
        <div className="services-section">
          <h3>Services Offered</h3>
          <div className="services-grid">
            {data.services.map((service, index) => (
              <div key={index} className="service-item">
                <h4>{service}</h4>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceTab;