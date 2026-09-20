import React from 'react';
import './Footer.css';
import { FaWhatsapp } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

function Footer() {
  const location = useLocation();

  const handleFooterNavLinkClick = (targetId) => {
    if (location.pathname === '/') {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="app-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <p className="footer-brand-name">Guilherme Quintiliano</p>
            <p className="footer-brand-oab">Advogado · OAB/PR 111.012</p>
            <a
              href="https://wa.me/554188050966?text=Olá,%20encontrei%20seu%20contato%20pelo%20site%20e%20gostaria%20de%20falar%20com%20o%20advogado%20Guilherme%20Quintiliano.%20Pode%20me%20ajudar?"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-whatsapp"
            >
              <FaWhatsapp /> Fale pelo WhatsApp
            </a>
          </div>

          <div className="footer-links">
            <div>
              <h4>Escritório</h4>
              <ul>
                <li>
                  <Link
                    to="/#sobre"
                    onClick={() => handleFooterNavLinkClick('sobre')}
                  >
                    Sobre
                  </Link>
                </li>
                <li>
                  <Link
                    to="/#servicos"
                    onClick={() => handleFooterNavLinkClick('servicos')}
                  >
                    Áreas de atuação
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4>Recursos</h4>
              <ul>
                <li>
                  <Link to="/blog" onClick={scrollToTop}>
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to="/#contato"
                    onClick={() => handleFooterNavLinkClick('contato')}
                  >
                    Contato
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4>Legal</h4>
              <ul>
                <li>
                  <Link to="/privacy-policy" onClick={scrollToTop}>
                    Política de Privacidade
                  </Link>
                </li>
                <li>
                  <Link to="/terms-of-service" onClick={scrollToTop}>
                    Termos de Serviço
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Guilherme Quintiliano. Todos os
            direitos reservados.
          </p>
          <div className="developer-credit">Desenvolvido por Junior Mira</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
