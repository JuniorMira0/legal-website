import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import FeatureSection1 from './components/FeatureSection1';
import AreasOfPractice from './components/AreasOfPractice';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Blog from './components/blog/Blog';
import BlogPost from './components/blog/BlogPost';
import LatestPosts from './components/blog/LatestPosts';
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

function useRevealOnScroll() {
  const location = useLocation();

  useEffect(() => {
    const elements = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    );

    const watch = (el) => {
      if (!el.classList.contains('is-visible')) observer.observe(el);
    };
    elements.forEach(watch);

    // conteúdo carregado depois (ex.: artigos do blog) também precisa animar
    const mutations = new MutationObserver((records) => {
      records.forEach((record) =>
        record.addedNodes.forEach((node) => {
          if (node.nodeType !== 1) return;
          if (node.classList.contains('reveal')) watch(node);
          node.querySelectorAll('.reveal').forEach(watch);
        }),
      );
    });
    mutations.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutations.disconnect();
    };
  }, [location.pathname]);
}

function App() {
  useRevealOnScroll();

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
                <Hero />
                <About />
                <FeatureSection1 />
                <AreasOfPractice />
                <LatestPosts />
                <ContactSection />
              </>
            }
          />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
