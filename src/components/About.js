import React from 'react';
import './About.css';
import aboutImage from '../assets/images/logo.png';

function About() {
  return (
    <section id="sobre" className="about-section section">
      <div className="container section-content-about">
        <div className="about-image-container reveal">
          <img
            src={aboutImage}
            alt="Logotipo GQ - Advocacia Guilherme Quintiliano"
            className="about-img"
          />
        </div>
        <div className="about-text-content reveal" style={{ '--reveal-delay': '120ms' }}>
          <span className="eyebrow">Sobre</span>
          <h2>Guilherme Quintiliano Rehme</h2>
          <p>
            Advogado (OAB/PR 111.012) formado pela Unicuritiba, atua em
            Curitiba-PR desde 2018 com foco em{' '}
            <strong>Direito do Consumidor</strong> e{' '}
            <strong>Direito Civil</strong>. Com experiência prática em diversas
            fases processuais e sistemas judiciais, busca oferecer soluções
            jurídicas eficientes e personalizadas em todos os estados. Sua
            prática abrange também casos específicos relacionados a Viagens.
          </p>
          <p>
            Conte com a sua dedicação e preparo para receber a melhor
            assistência jurídica, especialmente nas áreas que mais impactam o
            seu dia a dia.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
