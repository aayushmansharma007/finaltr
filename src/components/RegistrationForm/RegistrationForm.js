import React, { useState } from 'react';
import './RegistrationForm.css';

const RegistrationForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    collegeName: '',
    mobileNumber: '',
    applyingFor: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Implement your form submission logic here
      console.log('Form submitted:', formData);
      onClose();
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <form className="registration-form" onSubmit={handleSubmit}>
      <h2>Register with Us</h2>
      
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
        <button type="submit" className="submit-btn">Register</button>
        <button type="button" className="cancel-btn" onClick={onClose}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default RegistrationForm;