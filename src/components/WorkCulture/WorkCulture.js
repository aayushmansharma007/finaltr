import React from 'react';
import './WorkCulture.css';

const WorkCulture = () => {
  const culturePoints = [
    {
      title: "Innovation-Driven",
      description: "We encourage creative thinking and embrace new technologies",
      icon: "💡"
    },
    {
      title: "Work-Life Balance",
      description: "Flexible schedules and remote work options",
      icon: "⚖️"
    },
    {
      title: "Continuous Learning",
      description: "Regular workshops, conferences, and learning allowance",
      icon: "📚"
    },
    {
      title: "Inclusive Environment",
      description: "Diverse perspectives make us stronger",
      icon: "🤝"
    }
  ];

  return (
    <section className="work-culture">
      <h2>Our Culture</h2>
      <div className="culture-grid">
        {culturePoints.map((point, index) => (
          <div key={index} className="culture-card">
            <span className="culture-icon">{point.icon}</span>
            <h3>{point.title}</h3>
            <p>{point.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkCulture;