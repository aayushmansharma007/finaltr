import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // Replace with your Telegram bot token and chat ID
      const botToken = '7753450891:AAGbWkWF2ytud5mPz2boxwRY2f51GJqN6ys';
      const chatId = '6067712594';
      
      // Format message for Telegram
      const message = `
📝 New Collaboration Form Submission:

👤 Name: ${formData.name}
📧 Email: ${formData.email}
🏢 Organization: ${formData.organization || 'Not provided'}
📄 Project Scope & Goals:
${formData.message}
      `;
      
      // Send to Telegram
      const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: 'HTML'
        }),
      });
      
      const result = await response.json();
      
      if (result.ok) {
        setSubmitStatus('success');
        // Reset form
        setFormData({
          name: '',
          email: '',
          organization: '',
          message: ''
        });
      } else {
        throw new Error('Failed to send message to Telegram');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-container">
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <ul>
              <li><strong>General Inquiries:</strong> <a href="mailto:contact@lanos.io" className="contact-link">contact@lanos.io</a></li>
              <li><strong>Partnership Proposals:</strong> <a href="mailto:partners@lanos.io" className="contact-link">partners@lanos.io</a></li>
              <li><strong>Careers & Internships:</strong> <a href="mailto:careers@lanos.io" className="contact-link">careers@lanos.io</a></li>
              <li><strong>Phone:</strong> +91-12345-67890</li>
              <li><strong>Office:</strong> 123 Tech Park, Sagar, Madhya Pradesh, India</li>
            </ul>
          </div>
          
          <div className="contact-form">
            <h3>Collaboration Form</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                  className="form-input" 
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                  className="form-input" 
                />
              </div>
              <div className="form-group">
                <label htmlFor="organization">Organization</label>
                <input 
                  type="text" 
                  id="organization" 
                  name="organization" 
                  value={formData.organization}
                  onChange={handleChange}
                  className="form-input" 
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Project Scope & Goals</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5" 
                  value={formData.message}
                  onChange={handleChange}
                  required 
                  className="form-input"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="cta-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
              
              {submitStatus === 'success' && (
                <p className="form-status success">
                  Thank you! Your message has been sent successfully.
                </p>
              )}
              
              {submitStatus === 'error' && (
                <p className="form-status error">
                  There was an error sending your message. Please try again later.
                </p>
              )}
              
              <p className="form-note">We'll respond within 48 hours.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact


