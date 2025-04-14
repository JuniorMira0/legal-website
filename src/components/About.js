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
          <h1>Sobre Guilherme Quintiliano</h1>
          <p>
            Aqui você pode escrever uma descrição sobre você, sua experiência,
            sua abordagem como advogado, sua formação, etc. Este texto ajudará
            os visitantes a conhecerem melhor o profissional. Tente ser claro e
            objetivo.
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
