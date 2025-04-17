import React from 'react';
import './Benefits.css';

const Benefits = () => {
  const benefits = [
    {
      category: "Health & Wellness",
      items: [
        "Comprehensive health insurance",
        "Dental and vision coverage",
        "Mental health support",
        "Gym membership reimbursement"
      ]
    },
    {
      category: "Financial",
      items: [
        "Competitive salary",
        "401(k) with company match",
        "Stock options",
        "Annual bonus program"
      ]
    },
    {
      category: "Professional Growth",
      items: [
        "$5000 annual learning budget",
        "Conference attendance",
        "Certification support",
        "Mentorship program"
      ]
    },
    {
      category: "Lifestyle",
      items: [
        "Unlimited PTO",
        "Remote work flexibility",
        "Parental leave",
        "Company retreats"
      ]
    }
  ];

  return (
    <section className="benefits-section">
      <h2>Perks & Benefits</h2>
      <div className="benefits-grid">
        {benefits.map((benefit, index) => (
          <div key={index} className="benefit-card">
            <h3>{benefit.category}</h3>
            <ul>
              {benefit.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;