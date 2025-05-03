import { useState, useEffect, lazy, Suspense } from 'react';
import './App.css';
// Import core components normally
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollAnimation from './components/ScrollAnimation';

// Lazy load other components
const Hero = lazy(() => import('./components/Hero'));
const About = lazy(() => import('./components/About'));
const Services = lazy(() => import('./components/Services'));
const Research = lazy(() => import('./components/Research'));
const Benefits = lazy(() => import('./components/Benefits'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Contact = lazy(() => import('./components/Contact'));
const AdvancedThree = lazy(() => import('./components/AdvancedThree'));

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
      {showThree && <Suspense fallback={<div>Loading 3D...</div>}><AdvancedThree /></Suspense>}
      <ScrollAnimation />
      <Header />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Hero />
          <About />
          <Services />
          <Research />
          <Benefits />
          <Testimonials />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}

export default App
