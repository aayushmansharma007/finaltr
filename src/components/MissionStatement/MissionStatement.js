import React from 'react';
import './MissionStatement.css';

const MissionStatement = ({ text }) => {
  return (
    <section className="mission-statement">
      <div className="mission-content">
        <h2>Our Mission</h2>
        <p>{text}</p>
      </div>
    </section>
  );
};

export default MissionStatement;