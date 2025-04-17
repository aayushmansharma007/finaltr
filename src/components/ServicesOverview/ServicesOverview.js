import React from 'react';
import { motion } from 'framer-motion';
import './ServicesOverview.css';

const ServicesOverview = () => {
  const services = [
    {
      icon: "🔄",
      logoSrc: "/assets/icons/digital-transform.svg",
      title: "Digital Transformation",
      description: "Enterprise-wide digital solutions that drive efficiency and growth",
      color: "#6200EA"
    },
    {
      icon: "🛡️",
      logoSrc: "/assets/icons/security.svg",
      title: "Cybersecurity",
      description: "Advanced security protocols for government and enterprise systems",
      color: "#B819D2"
    },
    {
      icon: "🚀",
      logoSrc: "/assets/icons/innovation.svg",
      title: "Innovation Lab",
      description: "R&D partnerships for breakthrough technology solutions",
      color: "#FF0080"
    },
    {
      icon: "⚡",
      logoSrc: "/assets/icons/cloud.svg",
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services",
      color: "#00BCD4"
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: { duration: 0.8, type: "spring", stiffness: 100 }
    }
  };

  const emojiVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="services-overview">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="services-title"
      >
        Core Capabilities
      </motion.h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="service-card"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ scale: 1.03 }}
          >
            <div className="service-icon-container">
              <motion.div 
                className="service-logo"
                variants={iconVariants}
                whileHover="hover"
              >
                <img src={service.logoSrc} alt={service.title} />
              </motion.div>
              <motion.span 
                className="service-emoji"
                variants={emojiVariants}
                animate="animate"
              >
                {service.icon}
              </motion.span>
            </div>
            <h3 style={{ color: service.color }}>{service.title}</h3>
            <p>{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesOverview;
