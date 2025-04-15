import React from 'react';
import './About.css';
import aboutImage from '../assets/images/logo.jpeg';

function About() {
  return (
    <section
      id="sobre"
      className="about-section section section-gray full-screen-section"
    >
      {' '}
      <div className="container section-content-about">
        {' '}
        <div className="about-text-content">
          <h1>Sobre</h1>
          <p>
            Guilherme Quintiliano Rehme (OAB/PR 111.012), advogado formado pela
            Unicuritiba, atua em Curitiba-PR desde 2018 com foco em Direito do
            Consumidor e Direito Civil. Com experiência prática em diversas
            fases processuais e sistemas judiciais, busca oferecer soluções
            jurídicas eficientes e personalizadas em todos os estados. Sua
            prática abrange também em casos específicos relacionados a Viagens.
            Conte com a sua dedicação e preparo para receber a melhor
            assistência jurídica, especialmente nas áreas que mais impactam o
            seu dia a dia.
          </p>
        </div>
        <div className="about-image-container">
          <img
            src={aboutImage}
            alt="Logo de Guilherme Quintiliano Advogado"
            className="about-img"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
