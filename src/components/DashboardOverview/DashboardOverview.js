import React from 'react';
import './DashboardOverview.css';

const DashboardOverview = () => {
  return (
    <section className="dashboard-overview">
      <div className="metrics-grid">
        <div className="metric-card">
          <h3>Active Projects</h3>
          <p className="metric-value">3</p>
          <p className="metric-trend positive">↑ 1 from last month</p>
        </div>
        <div className="metric-card">
          <h3>Project Health</h3>
          <p className="metric-value">92%</p>
          <p className="metric-trend positive">↑ 5% from last month</p>
        </div>
        <div className="metric-card">
          <h3>Open Tickets</h3>
          <p className="metric-value">5</p>
          <p className="metric-trend negative">↑ 2 from last week</p>
        </div>
        <div className="metric-card">
          <h3>Next Invoice</h3>
          <p className="metric-value">$12,500</p>
          <p className="metric-date">Due: Sep 30, 2024</p>
        </div>
      </div>
    </section>
  );
};

export default DashboardOverview;