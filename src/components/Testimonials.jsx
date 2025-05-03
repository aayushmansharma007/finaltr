import React from 'react'

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <h2 className="section-title">Building Trust</h2>
        
        <div className="testimonials-section">
          <h3 className="section-subtitle">Real Testimonials</h3>
          <div className="testimonials-container">
            <div className="testimonial">
              <blockquote>
                "Lanos's Smart Goggle prototype has revolutionized our remote labs—our students are 60% more engaged."
              </blockquote>
              <cite>– Dr. Meera Iyer, Dean of Engineering, Sagar University</cite>
            </div>
            <div className="testimonial">
              <blockquote>
                "Partnering with Lanos for corporate training has doubled our internal upskilling throughput."
              </blockquote>
              <cite>– Rahul Kapoor, CTO, TechNova Solutions</cite>
            </div>
          </div>
        </div>
        
        <div className="team-culture">
          <h3>Our Team & Culture</h3>
          <p>Photos & Bios: Highlight nimble, multidisciplinary teams working in open-plan labs.</p>
          <p>Core Values: Innovation, Agility, Impact, Collaboration.</p>
        </div>
        
        <div className="insights">
          <h3>Insights & News</h3>
          <p><strong>Blog & Newsletter:</strong> Subscribe to our monthly "Lanos Insights" for deep dives on AR/AI in EdTech.</p>
          <p><strong>Latest News:</strong> <a href="#" className="news-link">Read how Smart Goggle won the 2025 Sagar Innovation Award</a></p>
        </div>
      </div>
    </section>
  )
}

export default Testimonials

