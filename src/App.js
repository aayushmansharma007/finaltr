import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    setIsTouchDevice('ontouchstart' in window);

    // Add touch event handling
    const preventZoom = (e) => {
      if (e.touches.length > 1) {
        e.preventDefault();
      }
    };

    document.addEventListener('touchstart', preventZoom, { passive: false });
    return () => document.removeEventListener('touchstart', preventZoom);
  }, []);

  const launchDate = new Date('2025-05-01T00:00:00+05:30'); // Updated to a future date with IST
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const indiaTime = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }));
      const difference = launchDate - indiaTime;

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        };
      }
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [launchDate]);

  return (
    <div className="App">
      <div className="container">
        <h1 className={`animate__animated ${isVisible ? 'animate__fadeInDown' : ''}`}>
          Website Launch Coming Soon!
        </h1>
        
        <div className="timer animate__animated animate__fadeIn animate__delay-1s">
          <div className="time-block animate__animated animate__flipInX animate__delay-1s">
            <span>{timeLeft.days.toString().padStart(2, '0')}</span>
            <p>Days</p>
          </div>
          <div className="time-block animate__animated animate__flipInX animate__delay-1s">
            <span>{timeLeft.hours.toString().padStart(2, '0')}</span>
            <p>Hours</p>
          </div>
          <div className="time-block animate__animated animate__flipInX animate__delay-1s">
            <span>{timeLeft.minutes.toString().padStart(2, '0')}</span>
            <p>Minutes</p>
          </div>
          <div className="time-block animate__animated animate__flipInX animate__delay-1s">
            <span>{timeLeft.seconds.toString().padStart(2, '0')}</span>
            <p>Seconds</p>
          </div>
        </div>

        <p className="message animate__animated animate__fadeInUp animate__delay-2s">
          We're working hard to bring you something extraordinary.
        </p>
        <p className="launch-date animate__animated animate__fadeInUp animate__delay-2s">
          Launch Date: May 1st, 2025
        </p>

        <div className="features animate__animated animate__fadeInUp animate__delay-3s">
          <div className="feature animate__animated animate__bounceIn animate__delay-3s">
            <span role="img" aria-label="rocket" className="floating">🚀</span>
            <p>Innovative Features</p>
          </div>
          <div className="feature animate__animated animate__bounceIn animate__delay-3s">
            <span role="img" aria-label="lightbulb" className="floating">💡</span>
            <p>Creative Solutions</p>
          </div>
          <div className="feature animate__animated animate__bounceIn animate__delay-3s">
            <span role="img" aria-label="target" className="floating">🎯</span>
            <p>Targeted Results</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
