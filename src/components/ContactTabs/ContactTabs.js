import React from 'react';
import './ContactTabs.css';

const ContactTabs = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'general', label: 'General Inquiry' },
    { id: 'government', label: 'Government Partnership' },
    { id: 'investor', label: 'Investor Relations' }
  ];

  return (
    <div className="contact-tabs">
      {tabs.map(tab => (
        <button
          key={tab.id}
          className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
          onClick={() => onTabChange(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default ContactTabs;
