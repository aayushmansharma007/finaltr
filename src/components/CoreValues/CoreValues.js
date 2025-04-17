import React from 'react';
import './CoreValues.css';

const CoreValues = ({ values }) => {
  return (
    <section className="core-values">
      <h2>Core Values</h2>
      <div className="values-grid">
        {values.map((value, index) => (
          <div key={index} className="value-card">
            <span className="value-icon">{value.icon}</span>
            <h3>{value.title}</h3>
            <p>{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoreValues;