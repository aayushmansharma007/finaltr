import React, { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Research from './components/Research'
import Benefits from './components/Benefits'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AdvancedThree from './components/AdvancedThree'
import ScrollAnimation from './components/ScrollAnimation'

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showThree, setShowThree] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    // Delay loading Three.js to ensure the basic UI renders first
    const timer = setTimeout(() => {
      setShowThree(true);
    }, 1000);
    
    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (!isLoaded) {
    return <div style={{color: 'white', padding: '20px'}}>Loading...</div>;
  }

  return (
    <div className="app">
      {showThree && <AdvancedThree />}
      <ScrollAnimation />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Research />
        <Benefits />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App





