import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import './CaseStudies.css';

const CaseStudies = () => {
  const [filter, setFilter] = useState('all');
  const [selectedCase, setSelectedCase] = useState(null);

  const caseStudies = [
    {
      id: 1,
      category: 'enterprise',
      title: "Digital Transformation Success",
      client: "Global Manufacturing Corp",
      challenge: "Legacy systems causing operational inefficiencies",
      solution: "Cloud migration and process automation implementation",
      impact: [
        "45% reduction in operational costs",
        "3x faster processing time",
        "99.9% system uptime"
      ],
      image: "/images/case-studies/manufacturing.jpg",
      testimonial: {
        quote: "The transformation exceeded our expectations.",
        author: "John Smith",
        role: "CTO"
      }
    },
    {
      id: 2,
      category: 'government',
      title: "Smart City Infrastructure",
      client: "Metropolitan Government",
      challenge: "Fragmented city services and poor citizen engagement",
      solution: "Integrated smart city platform with IoT sensors and mobile apps",
      impact: [
        "92% citizen satisfaction rate",
        "4x faster emergency response",
        "30% reduction in energy consumption"
      ],
      image: "/images/case-studies/smart-city.jpg",
      testimonial: {
        quote: "Our city is now a model for digital governance.",
        author: "Lisa Martinez",
        role: "City Innovation Director"
      }
    }
  ];

  const filters = [
    { id: 'all', label: 'All Cases' },
    { id: 'enterprise', label: 'Enterprise' },
    { id: 'government', label: 'Government' },
    { id: 'investor', label: 'Investor' }
  ];

  const filteredCases = filter === 'all' 
    ? caseStudies 
    : caseStudies.filter(study => study.category === filter);

  return (
    <section className="case-studies-section">
      <div className="case-studies-filters">
        {filters.map(filterItem => (
          <button
            key={filterItem.id}
            className={`filter-btn ${filter === filterItem.id ? 'active' : ''}`}
            onClick={() => setFilter(filterItem.id)}
          >
            {filterItem.label}
          </button>
        ))}
      </div>

      <div className="case-studies-grid">
        {filteredCases.map(study => (
          <article 
            key={study.id} 
            className="case-study-card"
            onClick={() => setSelectedCase(study)}
          >
            <div className="case-study-image">
              <img src={study.image} alt={study.title} />
              <div className="category-tag">{study.category}</div>
            </div>
            <div className="case-study-content">
              <h3>{study.title}</h3>
              <p className="client">{study.client}</p>
              <div className="challenge-solution">
                <div className="section">
                  <h4>Challenge</h4>
                  <p>{study.challenge}</p>
                </div>
                <div className="section">
                  <h4>Impact</h4>
                  <ul>
                    {study.impact.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <button className="read-more-btn">Read Full Case Study</button>
            </div>
          </article>
        ))}
      </div>

      {selectedCase && (
        <Modal onClose={() => setSelectedCase(null)}>
          <div className="case-study-modal">
            <h2>{selectedCase.title}</h2>
            <img src={selectedCase.image} alt={selectedCase.title} />
            <div className="modal-content">
              <h3>Client</h3>
              <p>{selectedCase.client}</p>
              
              <h3>Challenge</h3>
              <p>{selectedCase.challenge}</p>
              
              <h3>Our Solution</h3>
              <p>{selectedCase.solution}</p>
              
              <h3>Impact</h3>
              <ul>
                {selectedCase.impact.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              
              <blockquote>
                <p>{selectedCase.testimonial.quote}</p>
                <cite>
                  {selectedCase.testimonial.author}, {selectedCase.testimonial.role}
                </cite>
              </blockquote>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
};

export default CaseStudies;

