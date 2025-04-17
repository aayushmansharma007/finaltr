import React from 'react';
import { Helmet } from 'react-helmet';
import CaseStudies from '../../components/CaseStudies/CaseStudies';
import './CaseStudiesPage.css';

const CaseStudiesPage = () => {
  return (
    <>
      <Helmet>
        <title>Case Studies - Lanos IT Solutions</title>
        <meta 
          name="description" 
          content="Explore our success stories and see how we've helped organizations achieve their digital transformation goals." 
        />
      </Helmet>
      
      <main className="case-studies-page">
        <div className="page-header">
          <h1>Case Studies</h1>
          <p>Discover how we've helped organizations achieve their digital transformation goals</p>
        </div>
        
        <CaseStudies />
      </main>
    </>
  );
};

export default CaseStudiesPage;