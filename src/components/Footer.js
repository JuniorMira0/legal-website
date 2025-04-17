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
      <div className="container footer-container">
        <div className="footer-links">
          <div>
            <h4>Company</h4>
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
            <h4>Resources</h4>
            <ul>
              <li>
                <span>
                  Blog <span className="span-link">(Em breve)</span>
                </span>
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
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" onClick={scrollToTop}>
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="social-icons">
            <a
              href="https://wa.me/554188050966?text=Olá,%20encontrei%20seu%20contato%20pelo%20site%20e%20gostaria%20de%20falar%20com%20o%20advogado%20Guilherme%20Quintiliano.%20Pode%20me%20ajudar?"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <span>
                <FaWhatsapp />
              </span>
            </a>
          </div>
          <p>
            &copy; {new Date().getFullYear()} Guilherme Quintiliano. Todos os
            direitos reservados.
            <br />
            OAB/PR 111.012
          </p>
        </div>
        <div className="developer-credit">
          <a
            href="https://www.instagram.com/junior.mira_/"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            Desenvolvido por Junior Mira
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
