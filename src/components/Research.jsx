import React from 'react';

const Research = () => {
  return (
    <section id="research" className="research">
      <div className="container">
        <h2 className="section-title animate-on-scroll fade-in-up">R&D Innovations</h2>
        
        <div className="research-grid">
          <div className="research-card animate-on-scroll fade-in-left">
            <h3>Smart Goggle</h3>
            <p>Wearable AR device enhancing remote laboratories, real-time code overlays, and immersive tutorials.</p>
            
            <div className="research-details">
              <div className="research-team animate-on-scroll fade-in-up delay-200">
                <h4>Team Spotlight</h4>
                <p>R&D Lead Dr. Anjali Verma (PhD in Computer Vision), Hardware Engineer Rohit Desai, UX Designer Priya Menon, and AI Specialist Kavita Rao.</p>
              </div>
              
              <div className="research-milestone animate-on-scroll fade-in-up delay-300">
                <h4>Milestone</h4>
                <p>Prototype demoed at Sagar Tech Festival, April 2025.</p>
              </div>
              
              <div className="research-collaborate animate-on-scroll fade-in-up delay-400">
                <h4>Collaborate & Learn</h4>
                <p>Join our monthly R&D Workshops to get hands-on with Smart Goggle and other projects.</p>
                <button className="cta-button">Register Here</button>
              </div>
            </div>
          </div>
          
          <div className="research-card animate-on-scroll fade-in-up delay-200">
            <h3>Project Aurora (AI Adaptive Engine)</h3>
            <p>Personalizes learning pathways to boost retention by 40%.</p>
          </div>
          
          <div className="research-card animate-on-scroll fade-in-right delay-300">
            <h3>Project Nexus (IoT Smart Campus)</h3>
            <p>Sensor networks optimizing energy and facility management.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;

