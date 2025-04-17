import React, { useState, useEffect } from 'react';
import './App.css';
import Logo from './components/Logo';

function App() {
  const launchDate = new Date('2025-05-01T00:00:00+05:30');
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isVisible, setIsVisible] = useState(true);

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
        <div className="logo-container">
          <Logo />
        </div>
        
        <div className="main-content">
          <h1 className={`animate__animated ${isVisible ? 'animate__fadeInDown' : ''}`}>
            Lanos IT Solutions - Coming Soon!
          </h1>

          {/* Timer moved up */}
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

          <p className="launch-date animate__animated animate__fadeInUp animate__delay-2s">
            Launch Date: May 1st, 2025
          </p>

          {/* Introduction section after timer */}
          <div className="introduction-section animate__animated animate__fadeIn animate__delay-2s">
            <h2 className="intro-heading">Your Gateway to a Brighter Tech Future!</h2>
            
            <div className="intro-text">
              <p>Launching on 1st May, Lanos Technology is here to revolutionize the way you learn and grow in the world of software development. We offer affordable, industry-relevant online courses designed to empower beginners and aspiring developers to land their dream tech roles.</p>
            </div>

            <div className="courses-section">
              <h3>🎯 Our Courses Include:</h3>
              <div className="course-list">
                <div className="course-item">Full Stack Java Developer</div>
                <div className="course-item">Full Stack Python Developer</div>
                <div className="course-item">MERN Stack Developer</div>
              </div>
            </div>

            <div className="intro-footer">
              <p>Our curriculum is crafted by experts to ensure hands-on experience, real-world projects, and career-ready skills. Whether you're just starting out or switching careers, Lanos Technology is your partner in success.</p>
              <p className="highlight-text">Join us on this journey and unlock your potential in the tech world — without burning a hole in your pocket.</p>
              <p className="launch-highlight">🗓️ Mark your calendar: We're going live on 1st May!</p>
            </div>
          </div>

          <div className="features animate__animated animate__fadeInUp animate__delay-3s">
            <div className="feature animate__animated animate__bounceIn animate__delay-3s">
              <span role="img" aria-label="rocket" className="floating">🚀</span>
              <p>Innovative<br />Features</p>
            </div>
            <div className="feature animate__animated animate__bounceIn animate__delay-3s">
              <span role="img" aria-label="lightbulb" className="floating">💡</span>
              <p>Creative<br />Solutions</p>
            </div>
            <div className="feature animate__animated animate__bounceIn animate__delay-3s">
              <span role="img" aria-label="target" className="floating">🎯</span>
              <p>Targeted<br />Results</p>
            </div>
          </div>

          <div className="credit animate__animated animate__fadeIn animate__delay-3s">
            <p>Crafted with ❤️ by <span className="creator-name">Aayushman Testing</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;








