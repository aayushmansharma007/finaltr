import React from 'react';
import './LeadershipTeam.css';

const LeadershipTeam = () => {
  const leaders = [
    {
      name: 'Sarah Chen',
      role: 'Chief Executive Officer',
      image: '/images/leaders/sarah-chen.jpg',
      linkedin: 'https://linkedin.com/in/sarah-chen',
      bio: 'Former VP of Enterprise Solutions at Microsoft with 15+ years of technology leadership experience.'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Chief Technology Officer',
      image: '/images/leaders/michael-rodriguez.jpg',
      linkedin: 'https://linkedin.com/in/michael-rodriguez',
      bio: 'Technology innovator with extensive experience in cloud architecture and digital transformation.'
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Head of Innovation',
      image: '/images/leaders/emily-watson.jpg',
      linkedin: 'https://linkedin.com/in/emily-watson',
      bio: 'PhD in Computer Science, leading breakthrough developments in AI and machine learning.'
    }
  ];

  return (
    <section className="leadership-section">
      <h2>Leadership Team</h2>
      <div className="leaders-grid">
        {leaders.map((leader, index) => (
          <div key={index} className="leader-card">
            <div className="leader-image">
              <img src={leader.image} alt={leader.name} />
            </div>
            <h3>{leader.name}</h3>
            <p className="role">{leader.role}</p>
            <p className="bio">{leader.bio}</p>
            <a 
              href={leader.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="linkedin-link"
            >
              Connect on LinkedIn
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LeadershipTeam;