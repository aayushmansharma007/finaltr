import React from 'react';
import './Awards.css';

const Awards = () => {
  const awards = [
    {
      title: 'Enterprise Excellence Award',
      organization: 'Tech Innovation Forum',
      year: '2023'
    },
    {
      title: 'Best Digital Transformation Solution',
      organization: 'Digital Business Awards',
      year: '2023'
    },
    {
      title: 'Top IT Consulting Firm',
      organization: 'Industry Leaders Association',
      year: '2022'
    }
  ];

  return (
    <section className="awards-section">
      <h2>Awards & Recognition</h2>
      <div className="awards-grid">
        {awards.map((award, index) => (
          <div key={index} className="award-card">
            <h3>{award.title}</h3>
            <p className="award-org">{award.organization}</p>
            <span className="award-year">{award.year}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Awards;