import React from 'react';
import './MapSection.css';

const MapSection = () => {
  // Replace with your actual Google Maps API key
  const GOOGLE_MAPS_API_KEY = 'YOUR_GOOGLE_MAPS_API_KEY';
  
  // Company location coordinates
  const location = {
    lat: 37.7899,
    lng: -122.3990
  };

  return (
    <div className="map-section">
      <div className="map-container">
        <iframe
          title="Office Location"
          src={`https://www.google.com/maps/embed/v1/place?key=${GOOGLE_MAPS_API_KEY}
            &q=${location.lat},${location.lng}
            &zoom=15`}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div className="map-overlay">
        <div className="location-info">
          <h3>Our Office</h3>
          <address>
            <p>123 Tech Boulevard</p>
            <p>Innovation District</p>
            <p>San Francisco, CA 94105</p>
          </address>
          <div className="contact-info">
            <p>
              <strong>Phone:</strong> +1 (555) 123-4567
            </p>
            <p>
              <strong>Email:</strong> hello@lanos.tech
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapSection;
