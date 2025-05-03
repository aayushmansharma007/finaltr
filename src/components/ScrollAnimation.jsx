import React, { useEffect } from 'react';

const ScrollAnimation = () => {
  useEffect(() => {
    // Function to check if an element is in viewport
    const isInViewport = (element) => {
      const rect = element.getBoundingClientRect();
      return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
        rect.bottom >= 0
      );
    };

    // Function to handle scroll animation
    const handleScrollAnimation = () => {
      const animatedElements = document.querySelectorAll('.animate-on-scroll');
      
      animatedElements.forEach((element) => {
        if (isInViewport(element) && !element.classList.contains('animated')) {
          element.classList.add('animated');
        }
      });
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScrollAnimation);
    
    // Initial check for elements already in viewport
    setTimeout(handleScrollAnimation, 100);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScrollAnimation);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default ScrollAnimation;