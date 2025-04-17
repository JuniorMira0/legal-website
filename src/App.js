import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import FeatureSection1 from './components/FeatureSection1';
import AreasOfPractice from './components/AreasOfPractice';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import PrivacyPolicy from './components/legal/PrivacyPolicy';
import TermsOfService from './components/legal/TermsOfService';

function ScrollToSection() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      const hash = location.hash.substring(1);
      if (hash) {
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            const headerOffset =
              document.querySelector('.app-header')?.offsetHeight || 70;
            const elementPosition =
              element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - headerOffset - 10;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth',
            });
          }
        }, 100);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return null;
}

function App() {
  return (
    <div className="App">
      <ScrollToSection />
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Helmet>
                  <title>
                    Guilherme Quintiliano | Advogado em Curitiba - Cível e
                    Consumidor
                  </title>
                  <meta
                    name="description"
                    content="Advogado Guilherme Quintiliano (OAB/PR 111.012) em Curitiba. Atuação em Direito do Consumidor, Cível, Trabalhista e Viagens. Assessoria jurídica personalizada."
                  />
                </Helmet>
                <About />
                <FeatureSection1 />
                <AreasOfPractice />
                <ContactSection />
              </>
            }
          />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
