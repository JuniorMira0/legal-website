import React, { useState } from 'react';
import './ContactSection.css';
import { FaWhatsapp } from 'react-icons/fa';
import contactImage from '../assets/images/contact.png';

function ContactSection() {
  const whatsappLink =
    'https://wa.me/554188050966?text=Olá,%20encontrei%20seu%20contato%20pelo%20site%20e%20gostaria%20de%20falar%20com%20o%20advogado%20Guilherme%20Quintiliano.%20Pode%20me%20ajudar?';

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('Enviando...');

    const form = event.target;
    const data = {
      name,
      email,
      message,
      'whatsapp-number': whatsappNumber,
    };

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: JSON.stringify(data),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        setName('');
        setEmail('');
        setMessage('');
        setWhatsappNumber('');
        setStatus('Mensagem enviada com sucesso!');
      } else {
        const errorData = await response.json();
        if (Object.hasOwn(errorData, 'errors')) {
          setStatus(
            `Erro: ${errorData['errors']
              .map((error) => error['message'])
              .join(', ')}`,
          );
        } else {
          setStatus('Oops! Ocorreu um erro ao enviar a mensagem.');
        }
      }
    } catch (error) {
      setStatus('Oops! Ocorreu um erro de rede ao enviar a mensagem.');
    }
  };

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
            <form
              className="contact-form"
              action="https://formspree.io/f/meogqedr"
              method="POST"
              onSubmit={handleSubmit}
            >
              <div className="form-group">
                <label htmlFor="name">Nome</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Digite seu nome"
                  required
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
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
                  value={whatsappNumber}
                  onChange={(e) => setWhatsappNumber(e.target.value)}
                />
              </div>

              {status && <p className="form-status">{status}</p>}

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
