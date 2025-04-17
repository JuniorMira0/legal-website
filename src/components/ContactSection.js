import React from 'react';
import './ContactSection.css';
import { FaWhatsapp } from 'react-icons/fa';
import contactImage from '../assets/images/contact.png';

function ContactSection() {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    alert('Funcionalidade de envio de formulário a ser implementada!');
  };

  const whatsappLink =
    'https://wa.me/554188050966?text=Olá,%20encontrei%20seu%20contato%20pelo%20site%20e%20gostaria%20de%20falar%20com%20o%20advogado%20Guilherme%20Quintiliano.%20Pode%20me%20ajudar?';

  return (
    <section id="contato" className="contact-section section">
      <div className="container">
        <h2 className="section-title">Entre em Contato</h2>
        <p className="contact-subtitle">
          Tem alguma dúvida ou precisa de assessoria jurídica? Preencha o
          formulário abaixo ou fale diretamente pelo WhatsApp.
        </p>

        <div className="contact-layout-wrapper">
          <div className="contact-form-column">
            <form className="contact-form" onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nome</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Digite seu nome"
                  required
                  autoComplete="name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Digite seu email"
                  required
                  autoComplete="email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Mensagem</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Escreva sua mensagem"
                  required
                  autoComplete="off"
                ></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="whatsapp-number">WhatsApp (Opcional)</label>
                <input
                  type="tel"
                  id="whatsapp-number"
                  name="whatsapp-number"
                  placeholder="Seu número WhatsApp"
                  autoComplete="tel"
                />
              </div>
              <div className="form-button-group">
                <button type="submit" className="submit-button">
                  Enviar Mensagem
                </button>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-button-alt"
                >
                  <FaWhatsapp /> Ou Fale pelo WhatsApp
                </a>
              </div>
            </form>
          </div>

          <div className="contact-image-column">
            <img
              src={contactImage}
              alt="Mesa de trabalho com livro de direito, documentos e caneta."
              className="contact-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
