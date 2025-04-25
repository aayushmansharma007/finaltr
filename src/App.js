import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/theme.css';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import ServicesPage from './pages/ServicesPage/ServicesPage';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import CareersPage from './pages/CareersPage/CareersPage';
import ClientPortalPage from './pages/ClientPortalPage/ClientPortalPage';
import CaseStudiesPage from './pages/CaseStudiesPage/CaseStudiesPage';
import RegistrationList from './pages/RegistrationList/RegistrationList';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="app theme-transition">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/client-portal" element={<ClientPortalPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/registration" element={<RegistrationList />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;







