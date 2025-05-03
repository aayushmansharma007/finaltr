import React from 'react'
// import HeroAnimation from './HeroAnimation'

const Hero = () => {
  const handleExploreServices = () => {
    document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
  };

  const handleGetInTouch = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero">
      {/* <HeroAnimation /> */}
      <div className="container">
        <div className="hero-content">
          <h1>Lanos</h1>
          <h2>Agile EdTech & R&D Startup</h2>
          <p>Transforming technology education and innovation through mission-driven research and development.</p>
          <div className="cta-buttons">
            <button className="cta-button" onClick={handleExploreServices}>
              Explore Our Services
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
              </svg>
            </button>
            <button className="cta-button" onClick={handleGetInTouch}>
              Get In Touch
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero





