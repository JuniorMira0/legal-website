import React from 'react';
import './FeatureSection1.css';
import featureImage1 from '../assets/images/FeatureImg.png';

function FeatureSection1() {
  return (
    <section className="feature-section section">
      {' '}
      <div className="container section-content-feature1">
        <div className="feature1-image-container">
          <img
            src={featureImage1}
            alt="Navegando o cenário legal"
            className="feature1-img"
          />
        </div>

        <div className="feature1-text-content">
          <h2>Navigate the legal landscape...</h2>
          <p>
            Entenda as complexidades legais com nossa orientação especializada.
            Oferecemos clareza e direção para suas questões jurídicas,
            garantindo que você tome decisões informadas e seguras.
          </p>
          <button>Saiba Mais</button>
        </div>
      </div>
    </section>
  );
}

export default FeatureSection1;
