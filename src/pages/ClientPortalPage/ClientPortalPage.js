import React from 'react';
import { Helmet } from 'react-helmet';
import { Navigate } from 'react-router-dom';
import DashboardOverview from '../../components/DashboardOverview/DashboardOverview';
import ProjectProgress from '../../components/ProjectProgress/ProjectProgress';
import BillingSection from '../../components/BillingSection/BillingSection';
import './ClientPortalPage.css';

const ClientPortalPage = () => {
  const isAuthenticated = false; // Replace with actual auth check

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <>
      <Helmet>
        <title>Client Portal - Lanos IT Solutions</title>
        <meta 
          name="description" 
          content="Secure client portal for project tracking and management" 
        />
      </Helmet>

      <main className="client-portal">
        <div className="portal-header">
          <h1>Client Dashboard</h1>
          <div className="quick-actions">
            <button className="action-btn">Download Reports</button>
            <button className="action-btn">Schedule Meeting</button>
          </div>
        </div>

        <DashboardOverview />
        <ProjectProgress />
        <BillingSection />
      </main>
    </>
  );
};

export default ClientPortalPage;