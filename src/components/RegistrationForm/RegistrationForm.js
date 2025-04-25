import React, { useState } from 'react';
import './RegistrationForm.css';

const RegistrationForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    collegeName: '',
    mobileNumber: '',
    applyingFor: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Submitting...' });

    const endpoints = [
      'https://lanostechbackend.onrender.com/registered/add/users',
      'http://localhost:8080/registered/add/users'
    ];

    let succeeded = false;

    for (const endpoint of endpoints) {
      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...formData,
            applyingFor: formData.applyingFor.toUpperCase()
          })
        });

        const data = await response.json();

        if (response.ok) {
          succeeded = true;
          setStatus({ type: 'success', message: 'Registration successful!' });
          setTimeout(() => {
            onClose();
          }, 2000);
          break;
        } else {
          console.log(`Server error from ${endpoint}:`, data);
        }
      } catch (error) {
        console.log(`Failed to submit to ${endpoint}:`, error);
      }
    }

    if (!succeeded) {
      setStatus({ 
        type: 'error', 
        message: 'Failed to submit registration. Please try again.' 
      });
    }
  };

  return (
    <form className="registration-form" onSubmit={handleSubmit}>
      <h2>Register with Us</h2>
      
      {status.message && (
        <div className={`status-message ${status.type}`}>
          {status.message}
        </div>
      )}

      <div className="form-group">
        <label htmlFor="name">Full Name *</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Enter your full name"
        />
      </div>

      <div className="form-group">
        <label htmlFor="collegeName">College Name *</label>
        <input
          type="text"
          id="collegeName"
          name="collegeName"
          value={formData.collegeName}
          onChange={handleChange}
          required
          placeholder="Enter your college name"
        />
      </div>

      <div className="form-group">
        <label htmlFor="mobileNumber">Mobile Number *</label>
        <input
          type="tel"
          id="mobileNumber"
          name="mobileNumber"
          value={formData.mobileNumber}
          onChange={handleChange}
          required
          placeholder="Enter your mobile number"
        />
      </div>

      <div className="form-group">
        <label htmlFor="applyingFor">Applying For *</label>
        <select
          id="applyingFor"
          name="applyingFor"
          value={formData.applyingFor}
          onChange={handleChange}
          required
        >
          <option value="">Select an option</option>
          <option value="internship">Internship</option>
          <option value="learning">Learning</option>
          <option value="consultancy">Consultancy</option>
        </select>
      </div>

      <div className="form-actions">
        <button 
          type="submit" 
          className="submit-btn"
          disabled={status.type === 'loading'}
        >
          {status.type === 'loading' ? 'Submitting...' : 'Register'}
        </button>
        <button 
          type="button" 
          className="cancel-btn" 
          onClick={onClose}
          disabled={status.type === 'loading'}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default RegistrationForm;





