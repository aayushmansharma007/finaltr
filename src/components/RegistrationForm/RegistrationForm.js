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

  const validateForm = () => {
    if (!formData.name.trim()) {
      setStatus({ type: 'error', message: 'Name is required' });
      return false;
    }
    if (!formData.collegeName.trim()) {
      setStatus({ type: 'error', message: 'College name is required' });
      return false;
    }
    if (!formData.mobileNumber.trim()) {
      setStatus({ type: 'error', message: 'Mobile number is required' });
      return false;
    }
    if (!formData.applyingFor) {
      setStatus({ type: 'error', message: 'Please select what you are applying for' });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setStatus({ type: 'loading', message: 'Submitting...' });

    const endpoint = 'https://lanostechbackend.onrender.com/registered/add/users';

    // Format the data according to backend requirements
    const requestData = {
      name: formData.name.trim(),
      collegeName: formData.collegeName.trim(),
      mobileNumber: formData.mobileNumber.trim(),
      applyingFor: formData.applyingFor.toUpperCase(), // Convert to uppercase to match enum
      registrationDate: new Date().toISOString().split('T')[0]
    };

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData)
      });

      if (response.ok) {
        setStatus({ type: 'success', message: 'Registration successful!' });
        setTimeout(() => {
          onClose();
        }, 2000);
      } else {
        const errorData = await response.json();
        console.error('Server response:', errorData);
        setStatus({ type: 'error', message: 'Registration failed. Please try again.' });
      }
    } catch (err) {
      console.error(`Error submitting to ${endpoint}:`, err);
      setStatus({ type: 'error', message: 'Registration failed. Please try again.' });
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
          <option value="INTERNSHIP">Internship</option>
          <option value="LEARNING">Learning</option>
          <option value="CONSULTANCY">Consultancy</option>
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












