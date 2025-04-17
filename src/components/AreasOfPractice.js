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
    icon: <FaShoppingCart size={40} />,
    title: 'Direito do Consumidor',
    description:
      'Defesa dos seus direitos em relações de consumo, buscando soluções em casos de produtos/serviços inadequados, cobranças indevidas, publicidade enganosa e mais.',
  },
  {
    id: 'civil',
    icon: <FaGavel size={40} />,
    title: 'Direito Civil',
    description:
      'Assessoria em questões cíveis como contratos, obrigações, responsabilidade civil (indenizações), propriedade, família (consultar se aplicável) e outras demandas do cotidiano.',
  },
  {
    id: 'trabalho',
    icon: <FaBriefcase size={40} />,
    title: 'Direito do Trabalho',
    description:
      'Orientação e atuação em demandas trabalhistas, defendendo seus interesses em questões como verbas rescisórias, horas extras, direitos e deveres.',
  },
  {
    id: 'viagens',
    icon: <FaPlaneDeparture size={40} />,
    title: 'Questões Jurídicas de Viagens',
    description:
      'Suporte legal em problemas com viagens: cancelamentos/atrasos de voos, extravio de bagagem, questões com pacotes turísticos, hospedagem e direitos do passageiro.',
  },
];

function AreasOfPractice() {
  return (
    <section
      id="servicos"
      className="practice-areas-section section section-gray"
    >
      <div className="container">
        <h2 className="section-title">Áreas de Atuação</h2>
        <div className="practice-areas-grid">
          {practiceAreas.map((area) => (
            <div key={area.id} className="practice-area-card">
              <div className="card-icon">{area.icon}</div>
              <h3 className="card-title">{area.title}</h3>
              <p className="card-description">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AreasOfPractice;
