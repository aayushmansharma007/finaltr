import React from 'react';
import './EmployeeTestimonials.css';

const EmployeeTestimonials = () => {
  const testimonials = [
    {
      name: "Alex Chen",
      role: "Senior Software Engineer",
      image: "/images/employees/alex-chen.jpg",
      quote: "The opportunity to work with cutting-edge tech while maintaining work-life balance is incredible.",
      yearsAtCompany: 2
    },
    {
      name: "Sarah Johnson",
      role: "Product Manager",
      image: "/images/employees/sarah-johnson.jpg",
      quote: "The growth opportunities here are unmatched. I started as a junior PM and grew into a leadership role.",
      yearsAtCompany: 3
    },
    {
      name: "Michael Patel",
      role: "Security Architect",
      image: "/images/employees/michael-patel.jpg",
      quote: "Being able to shape the security infrastructure of major enterprises is both challenging and rewarding.",
      yearsAtCompany: 1.5
    }
  ];

  return (
    <section className="employee-testimonials">
      <h2>Meet Our Team</h2>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <img 
              src={testimonial.image} 
              alt={testimonial.name} 
              className="employee-image" 
            />
            <blockquote>{testimonial.quote}</blockquote>
            <div className="employee-info">
              <h3>{testimonial.name}</h3>
              <p>{testimonial.role}</p>
              <span>{testimonial.yearsAtCompany} years at Lanos IT</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EmployeeTestimonials;