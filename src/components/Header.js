import React, { useEffect, useState } from 'react';
import { FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';
import { Link } from 'react-router-dom';

const whatsappLink =
  'https://wa.me/554188050966?text=Olá,%20encontrei%20seu%20contato%20pelo%20site%20e%20gostaria%20de%20falar%20com%20o%20advogado%20Guilherme%20Quintiliano.%20Pode%20me%20ajudar?';

const navItems = [
  { id: 'about', label: 'Sobre', href: '/#sobre' },
  { id: 'servicos', label: 'Áreas de Atuação', href: '/#servicos' },
  { id: 'blog', label: 'Blog', href: '/blog' },
  { id: 'contato', label: 'Contato', href: '/#contato' },
];

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`app-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container header-container">
        <Link to="/" className="logo-link" onClick={closeMobileMenu}>
          <span className="logo-mark" aria-hidden="true">
            GQ
          </span>
          <span className="logo-text">Guilherme Quintiliano</span>
        </Link>

        <nav className="nav-container-desktop" aria-label="Principal">
          {navItems.map((item) => (
            <Link key={item.id} to={item.href} className="nav-link-desktop">
              {item.label}
            </Link>
          ))}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-dark header-cta"
          >
            <FaWhatsapp /> WhatsApp
          </a>
        </nav>

        <button
          type="button"
          className="mobile-menu-icon"
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}
      >
        {navItems.map((item) => (
          <Link
            key={item.id}
            to={item.href}
            className="mobile-menu-link"
            onClick={closeMobileMenu}
          >
            {item.label}
          </Link>
        ))}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mobile-menu-link mobile-menu-whatsapp"
          onClick={closeMobileMenu}
        >
          <FaWhatsapp /> Falar pelo WhatsApp
        </a>
      </div>
    </header>
  );
}

export default Header;
