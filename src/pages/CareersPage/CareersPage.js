import React from 'react';
import { Helmet } from 'react-helmet';
import WorkCulture from '../../components/WorkCulture/WorkCulture';
import JobOpenings from '../../components/JobOpenings/JobOpenings';
import EmployeeTestimonials from '../../components/EmployeeTestimonials/EmployeeTestimonials';
import Benefits from '../../components/Benefits/Benefits';
import CTAButton from '../../components/CTAButton/CTAButton';
import './CareersPage.css';

const CareersPage = () => {
  return (
    <>
      <Helmet>
        <title>Careers at Lanos IT - Join Our Innovation Team</title>
        <meta name="description" content="Join a leading tech innovator. Explore IT jobs and career opportunities in software development, cybersecurity, and digital transformation." />
        <meta name="keywords" content="IT jobs near me, startup career opportunities, tech jobs 2025, software developer jobs, IT careers" />
      </Helmet>

      <main className="careers-page">
        <section className="careers-hero">
          <h1>Join the Team Building the Future of Tech</h1>
          <p className="hero-subtitle">
            We're not just hiring coders — we're building a tribe of passionate innovators, mentors, engineers, and educators. If you want to build something that matters, this is the place.
          </p>
          <div className="cta-buttons">
            <CTAButton 
              text="View Openings" 
              type="primary"
              onClick={() => document.getElementById('job-openings').scrollIntoView({ behavior: 'smooth' })}
            />
            <CTAButton 
              text="Intern With Us" 
              type="secondary"
              onClick={() => window.location.href = '/careers/internships'}
            />
          </div>
        </section>

        <WorkCulture />
        <JobOpenings />
        <EmployeeTestimonials />
        <Benefits />
      </main>
    </>
  );
};

export default CareersPage;
