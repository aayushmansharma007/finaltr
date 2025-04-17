import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '../../components/Hero/Hero';
import TrustedPartners from '../../components/TrustedPartners/TrustedPartners';
import MissionStatement from '../../components/MissionStatement/MissionStatement';
import SEOSchema from '../../components/SEOSchema/SEOSchema';
import './HomePage.css';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Lanos IT Solutions - Enterprise Technology Solutions</title>
        <meta 
          name="description" 
          content="Leading provider of enterprise IT solutions, digital transformation, and technology consulting services." 
        />
      </Helmet>
      <SEOSchema type="organization" />
      
      <main className="home-page">
        <Hero />
        
        <TrustedPartners />
        
        <MissionStatement 
          text="At Lanos Pvt Ltd, we are on a mission to re-engineer technology education, modernize government digital infrastructure, and deliver high-efficiency IT consultancy services that enable real-world transformation."
        />
      </main>
    </>
  );
};

export default HomePage;




