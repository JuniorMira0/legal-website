import React from 'react';
import './FeatureSection1.css';
import featureImage1 from '../assets/images/FeatureImg.png';
import { Link } from 'react-router-dom';

function FeatureSection1() {
  return (
    <section className="feature-section section">
      {' '}
      <div className="container section-content-feature1">
        <div className="feature1-image-container">
          <img
            src={featureImage1}
            alt="Estátua da Justiça com balança, simbolizando direito e equidade"
            className="feature1-img"
          />
        </div>

        <div className="feature1-text-content">
          <h2>Experiência que Faz a Diferença</h2>
          <p>
            Ter um advogado com experiência prática em todas as fases do
            processo faz a diferença no resultado final do seu caso. Desde 2018,
            minha atuação em negociações, audiências e execuções me permite
            antecipar cenários e construir estratégias mais sólidas para você. O
            objetivo é sempre a solução mais eficiente e vantajosa, com um
            serviço personalizado que entende suas necessidades. A agilidade no
            uso dos sistemas processuais é mais um fator que emprego para
            garantir que seus direitos sejam defendidos da forma mais eficaz e
            organizada possível.
          </p>
          <Link to="/#contato" className="feature-contact-button">
            Entre em Contato
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FeatureSection1;
