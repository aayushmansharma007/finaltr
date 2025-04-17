import React, { useEffect, useRef } from 'react';
import './ServiceSegments.css';

const ServiceSegments = () => {
  const services = [
    {
      icon: "🚀",
      title: "Digital Transformation",
      description: "Modernize your business with cutting-edge digital solutions",
      color: "#6200EA"
    },
    {
      icon: "🛡️",
      title: "Cybersecurity",
      description: "Protect your assets with advanced security measures",
      color: "#B819D2"
    },
    {
      icon: "☁️",
      title: "Cloud Solutions",
      description: "Scale your infrastructure with cloud-native architecture",
      color: "#FF0080"
    }
  ];

  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            entry.target.style.animationDelay = `${index * 0.2}s`;
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current.querySelectorAll('.service-card');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="service-segments" ref={sectionRef}>
      <div className="services-container">
        <div className="service-header">
          <span role="img" aria-label="building">🏢</span>
          <h1>For Enterprises – IT Consultancy Services</h1>
          <h2>Empowering businesses with modern tech infrastructure</h2>
        </div>
        
        <p className="service-description">
          Our consulting division specializes in end-to-end digital modernization. From legacy system migration to cloud-native infrastructure, we enable enterprises to thrive in the digital economy.
        </p>

        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card"
              style={{'--accent-color': service.color}}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="service-hover-effect"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSegments;

