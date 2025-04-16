// src/App.js
import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import FeatureSection1 from './components/FeatureSection1';
import Footer from './components/Footer';
import AreasOfPractice from './components/AreasOfPractice';
import PrivacyPolicy from './components/legal/PrivacyPolicy';
import TermsOfService from './components/legal/TermsOfService';

function ScrollToSection() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      if (location.hash === '#servicos') {
        const servicesSection = document.getElementById('servicos');
        if (servicesSection) {
          servicesSection.scrollIntoView({ behavior: 'smooth' });
        }
      } else if (location.hash === '#sobre') {
        const aboutSection = document.getElementById('sobre');
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <About />
                  <FeatureSection1 />
                  <AreasOfPractice />
                </>
              }
            />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToSection />
      </div>
    </Router>
  );
}

export default App;
