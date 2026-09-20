import React from 'react';
import './AreasOfPractice.css';
import {
  FaShoppingCart,
  FaGavel,
  FaBriefcase,
  FaPlaneDeparture,
} from 'react-icons/fa';

const practiceAreas = [
  {
    id: 'consumidor',
    icon: <FaShoppingCart />,
    title: 'Direito do Consumidor',
    description:
      'Defesa dos seus direitos em relações de consumo, buscando soluções em casos de produtos/serviços inadequados, cobranças indevidas, publicidade enganosa e mais.',
  },
  {
    id: 'civil',
    icon: <FaGavel />,
    title: 'Direito Civil',
    description:
      'Assessoria em questões cíveis como contratos, obrigações, responsabilidade civil (indenizações), propriedade, família (consultar se aplicável) e outras demandas do cotidiano.',
  },
  {
    id: 'trabalho',
    icon: <FaBriefcase />,
    title: 'Direito do Trabalho',
    description:
      'Orientação e atuação em demandas trabalhistas, defendendo seus interesses em questões como verbas rescisórias, horas extras, direitos e deveres.',
  },
  {
    id: 'viagens',
    icon: <FaPlaneDeparture />,
    title: 'Questões Jurídicas de Viagens',
    description:
      'Suporte legal em problemas com viagens: cancelamentos/atrasos de voos, extravio de bagagem, questões com pacotes turísticos, hospedagem e direitos do passageiro.',
  },
];

function AreasOfPractice() {
  return (
    <section id="servicos" className="practice-areas-section section">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Atuação</span>
          <h2 className="section-title">Áreas de Atuação</h2>
          <p className="section-lead">
            Assessoria jurídica nas situações que mais impactam o seu dia a dia.
          </p>
        </div>
        <div className="practice-areas-grid">
          {practiceAreas.map((area, index) => (
            <article
              key={area.id}
              className="practice-area-card reveal"
              style={{ '--reveal-delay': `${index * 90}ms` }}
            >
              <div className="card-icon">{area.icon}</div>
              <h3 className="card-title">{area.title}</h3>
              <p className="card-description">{area.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AreasOfPractice;
