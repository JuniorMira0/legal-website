import React from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaBalanceScale } from 'react-icons/fa';

const whatsappLink =
  'https://wa.me/554188050966?text=Olá,%20encontrei%20seu%20contato%20pelo%20site%20e%20gostaria%20de%20falar%20com%20o%20advogado%20Guilherme%20Quintiliano.%20Pode%20me%20ajudar?';

const highlights = [
  { value: '2018', label: 'Atuando em Curitiba' },
  { value: '4', label: 'Áreas de atuação' },
  { value: 'Brasil', label: 'Atendimento em todos os estados' },
];

function Hero() {
  return (
    <section className="hero" id="inicio">
      <FaBalanceScale className="hero-watermark" aria-hidden="true" />
      <div className="container hero-inner">
        <span className="eyebrow hero-eyebrow">
          Advocacia · Curitiba, PR · OAB/PR 111.012
        </span>
        <h1 className="hero-title">
          Seus direitos defendidos com <em>estratégia</em> e proximidade.
        </h1>
        <p className="hero-subtitle">
          Assessoria jurídica em Direito do Consumidor, Cível, Trabalhista e
          Viagens — com atendimento personalizado e foco em resolver o seu caso
          da forma mais eficiente.
        </p>
        <div className="hero-actions">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold"
          >
            <FaWhatsapp /> Falar pelo WhatsApp
          </a>
          <Link to="/#servicos" className="btn btn-outline-light">
            Conheça as áreas de atuação
          </Link>
        </div>
        <ul className="hero-highlights">
          {highlights.map((item) => (
            <li key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Hero;
