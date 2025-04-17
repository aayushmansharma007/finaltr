import React, { useState, useEffect } from 'react';
import './JobOpenings.css';

const JobOpenings = () => {
  const [jobs, setJobs] = useState([]);
  const [filter, setFilter] = useState('all');

  // Example jobs - Replace with API call to your HR software
  const fetchJobs = async () => {
    // Simulate API call
    const jobsData = [
      {
        id: 1,
        title: "Senior Software Engineer",
        department: "Engineering",
        location: "Remote / New York",
        type: "Full-time",
        experience: "5+ years",
        description: "Lead development of enterprise-scale applications...",
        requirements: [
          "Experience with React, Node.js, and cloud platforms",
          "Strong system design and architecture skills",
          "Track record of leading technical projects"
        ],
        postedDate: "2024-03-15"
      },
      {
        id: 2,
        title: "Cybersecurity Analyst",
        department: "Security",
        location: "Boston",
        type: "Full-time",
        experience: "3+ years",
        description: "Protect enterprise systems and implement security protocols...",
        requirements: [
          "Security certifications (CISSP, CEH)",
          "Experience with threat detection tools",
          "Incident response expertise"
        ],
        postedDate: "2024-03-18"
      },
      // Add more jobs...
    ];
    setJobs(jobsData);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <section className="job-openings">
      <h2>Current Openings</h2>
      
      <div className="filters">
        <button 
          className={filter === 'all' ? 'active' : ''} 
          onClick={() => setFilter('all')}
        >
          All Roles
        </button>
        <button 
          className={filter === 'Engineering' ? 'active' : ''} 
          onClick={() => setFilter('Engineering')}
        >
          Engineering
        </button>
        <button 
          className={filter === 'Security' ? 'active' : ''} 
          onClick={() => setFilter('Security')}
        >
          Security
        </button>
      </div>

      <div className="jobs-grid">
        {jobs
          .filter(job => filter === 'all' || job.department === filter)
          .map(job => (
            <article key={job.id} className="job-card">
              <div className="job-header">
                <h3>{job.title}</h3>
                <span className="job-type">{job.type}</span>
              </div>
              
              <div className="job-details">
                <p className="location">📍 {job.location}</p>
                <p className="experience">👔 {job.experience}</p>
              </div>

              <p className="job-description">{job.description}</p>

              <div className="requirements">
                <h4>Requirements:</h4>
                <ul>
                  {job.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </div>

              <div className="job-footer">
                <span className="posted-date">
                  Posted: {new Date(job.postedDate).toLocaleDateString()}
                </span>
                <button className="apply-btn">Apply Now</button>
              </div>
            </article>
          ))}
      </div>
    </section>
  );
};

export default JobOpenings;