import React from 'react';
import './ConsultationForm.css';

const ConsultationForm = ({ onClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <form className="consultation-form" onSubmit={handleSubmit}>
      <h2>Schedule a Consultation</h2>
      
      <div className="form-group">
        <label htmlFor="fullName">Full Name *</label>
        <input
          type="text"
          id="fullName"
          required
          placeholder="Enter your full name"
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email Address *</label>
        <input
          type="email"
          id="email"
          required
          placeholder="Enter your email"
        />
      </div>

      <div className="form-group">
        <label htmlFor="phone">Phone Number *</label>
        <input
          type="tel"
          id="phone"
          required
          placeholder="Enter your phone number"
        />
      </div>

      <div className="form-group">
        <label htmlFor="date">Preferred Date *</label>
        <input
          type="date"
          id="date"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="time">Preferred Time *</label>
        <select id="time" required>
          <option value="">Select a time</option>
          <option value="morning">Morning (9AM - 12PM)</option>
          <option value="afternoon">Afternoon (12PM - 4PM)</option>
          <option value="evening">Evening (4PM - 7PM)</option>
        </select>
      </div>

      <div className="form-actions">
        <button type="submit" className="submit-btn">Schedule</button>
        <button type="button" className="cancel-btn" onClick={onClose}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ConsultationForm;
