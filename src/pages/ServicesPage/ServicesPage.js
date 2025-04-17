import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import ServiceTab from '../../components/ServiceTab/ServiceTab';
import './ServicesPage.css';

const ServicesPage = () => {
  const [activeTab, setActiveTab] = useState('enterprise');

  const services = {
    enterprise: {
      title: "For Enterprises – IT Consultancy Services",
      header: "Empowering businesses with modern tech infrastructure",
      body: "Our consulting division specializes in end-to-end digital modernization. From legacy system migration to cloud-native infrastructure, we enable enterprises to thrive in the digital economy.",
      services: [
        "Cloud & Infrastructure Setup",
        "Cybersecurity & Audit Systems",
        "Custom Software Development",
        "DevOps & Continuous Delivery Pipelines",
        "Scalable Backend Architectures"
      ],
      icon: "🏢"
    },
    government: {
      title: "For Government Agencies – Smart Digital Transformation",
      header: "Building resilient, citizen-centric digital governance systems",
      body: "We partner with state and national agencies to design, develop, and maintain secure public-sector software. Our systems are modular, scalable, and compliant with GDPR, COPPA, and data localization policies.",
      services: [
        "e-Governance Platforms",
        "Public Sector SaaS",
        "Education & Employment Portals",
        "Smart City Integrations",
        "AI-driven Risk & Performance Monitoring"
      ],
      icon: "🏛️"
    },
    investor: {
      title: "For Investors – Scalable, Profitable, Proven",
      header: "India's most scalable tech ecosystem for education, training, and employment",
      body: "Our EdTech platform is uniquely positioned to become India's #1 tech learning ecosystem, offering dynamic, gamified, AI-driven learning paths, built-in internships, and a job-ready pipeline. The business model is multi-tiered with freemium access, plan-wise unlocks, and high-retention mentorship communities.",
      highlights: [
        "TAM: 100M+ learners in underserved markets",
        "Freemium → Subscription → Corporate Upsell Ladder",
        "Proprietary Gamified Learning Models",
        "ISO-backed Certification, Global Expansion Potential"
      ],
      icon: "📈"
    }
  };

  return (
    <>
      <Helmet>
        <title>Our Services - Lanos IT Solutions</title>
        <meta 
          name="description" 
          content="Comprehensive IT solutions for enterprises, government agencies, and investors. Transform your organization with our expertise." 
        />
      </Helmet>

      <main className="services-page">
        <div className="services-tabs">
          <button 
            className={`tab-button ${activeTab === 'enterprise' ? 'active' : ''}`}
            onClick={() => setActiveTab('enterprise')}
          >
            <span className="tab-icon">🏢</span>
            Enterprise
          </button>
          <button 
            className={`tab-button ${activeTab === 'government' ? 'active' : ''}`}
            onClick={() => setActiveTab('government')}
          >
            <span className="tab-icon">🏛️</span>
            Government
          </button>
          <button 
            className={`tab-button ${activeTab === 'investor' ? 'active' : ''}`}
            onClick={() => setActiveTab('investor')}
          >
            <span className="tab-icon">📈</span>
            Investors
          </button>
        </div>

        <div className="service-content">
          <ServiceTab 
            data={services[activeTab]} 
            type={activeTab}
          />
        </div>
      </main>
    </>
  );
};

export default ServicesPage;