import React from 'react';
import './Footer.css';
import { FaWhatsapp } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="app-footer">
      <div className="container footer-container">
        <div className="footer-links">
          <div>
            <h4>Company</h4>
            <ul>
              <li>
                <a href="#">Sobre</a>
              </li>
              <li>
                <a href="#">Áreas de atuação</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Resources</h4>
            <ul>
              <li>
                <a href="#">
                  Blog <span className="span-link">(Em breve)</span>
                </a>
              </li>
              <li>
                <a href="#">Contato</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Legal</h4>
            <ul>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
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
            >
              <span>
                <FaWhatsapp />{' '}
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
      </div>
    </footer>
  );
}

export default Footer;
