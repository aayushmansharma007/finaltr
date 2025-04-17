import React, { useEffect, useRef } from 'react';
import './Timeline.css';

const Timeline = ({ milestones }) => {
  const timelineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-timeline-item');
          }
        });
      },
      { threshold: 0.2 }
    );

    const timelineItems = timelineRef.current.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="timeline-section" ref={timelineRef}>
      <h2 className="timeline-title">Our Journey</h2>
      <div className="timeline-container">
        <div className="timeline-line"></div>
        {milestones.map((milestone, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-card">
              <span className="year-badge">{milestone.year}</span>
              <div className="timeline-content">
                <h3>{milestone.title}</h3>
                <p>{milestone.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
