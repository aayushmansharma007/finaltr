import React from 'react';
import { Helmet } from 'react-helmet';
import Timeline from '../../components/Timeline/Timeline';
import LeadershipTeam from '../../components/LeadershipTeam/LeadershipTeam';
import CoreValues from '../../components/CoreValues/CoreValues';
import './AboutPage.css';

const AboutPage = () => {
  const milestones = [
    {
      year: '2025',
      title: 'Security & Scale',
      description: 'ISO 27001 certification in process, scalable backend and security models deployed'
    },
    {
      year: '2025',
      title: 'Government Partnerships',
      description: 'Partnered with state governments for smart governance initiatives'
    },
    {
      year: '2024',
      title: 'EdTech Launch',
      description: 'Launched national EdTech pilot program'
    },
    {
      year: '2023',
      title: 'Company Founded',
      description: 'Founded with a mission to reform tech education in India'
    }
  ];

  const coreValues = [
    {
      title: 'Integrity',
      description: 'Transparent, ethical, and reliable',
      icon: '🤝'
    },
    {
      title: 'Innovation',
      description: 'Always ahead of the curve',
      icon: '💡'
    },
    {
      title: 'Execution',
      description: 'Relentlessly outcome-focused',
      icon: '🎯'
    },
    {
      title: 'Inclusion',
      description: 'Tech for every level of society',
      icon: '🌏'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Lanos - Bridging the Digital Divide</title>
        <meta name="description" content="Lanos is a high-impact technology company driven by a bold vision—to bridge the digital divide across emerging economies." />
      </Helmet>

      <div className="about-page">
        <section className="about-hero">
          <h1 className="hero-title">Who We Are</h1>
          <p className="hero-subtitle">
            Bridging the digital divide across emerging economies through innovative technology solutions.
          </p>
        </section>

        <section className="company-intro">
          <div className="intro-content">
            <p>
              Lanos Pvt Ltd is a high-impact technology company driven by a bold vision—to bridge the digital divide across emerging economies. We build modern, scalable IT systems, provide consultancy for future-proof transformation, and run India's most mission-driven EdTech platform tailored for school students, college graduates, and working professionals.
            </p>
            <p>
              Our business sits at the intersection of technology innovation, scalable consultancy, and practical skill development. Whether modernizing governance platforms or training the next generation of developers, we are deeply committed to creating value that transcends boundaries.
            </p>
          </div>
        </section>

        <section className="vision-section">
          <h2>Our Vision</h2>
          <div className="vision-statement">
            <div className="vision-line">To be the global benchmark</div>
            <div className="vision-line">for tech transformation in education,</div>
            <div className="vision-line">governance, and enterprise operations.</div>
          </div>
        </section>

        <CoreValues values={coreValues} />
        
        <Timeline milestones={milestones} />
        
        <LeadershipTeam />
      </div>
    </>
  );
};

export default AboutPage;



