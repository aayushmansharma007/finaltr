import React from 'react';

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title animate-on-scroll fade-in-up">Services, Products & Researches</h2>
        
        <h3 className="section-subtitle animate-on-scroll fade-in-up delay-100">Core Services & Products</h3>
        
        <div className="services-grid">
          <div className="service-card animate-on-scroll scale-in delay-200">
            <h3>Gamified Learning Platform</h3>
            <p>Adaptive, XP-driven modules in AI, IoT, and full-stack development.</p>
          </div>
          
          <div className="service-card animate-on-scroll scale-in delay-300">
            <h3>Enterprise Training Solutions</h3>
            <p>Customized corporate upskilling programs and white-label LMS integrations.</p>
          </div>
          
          <div className="service-card animate-on-scroll scale-in delay-400">
            <h3>Consulting & Curriculum Design</h3>
            <p>Partnership offerings for universities and schools to co-develop cutting-edge tech curricula.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

