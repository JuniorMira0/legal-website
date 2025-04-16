import React, { useState } from 'react';
import {
  FaWhatsapp,
  FaBars,
  FaTimes,
  FaUser,
  FaBalanceScale,
} from 'react-icons/fa';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const navItems = [
    {
      id: 'whatsapp',
      icon: <FaWhatsapp />,
      label: 'WhatsApp',
      href: 'https://wa.me/554188050966?text=Olá,%20encontrei%20seu%20contato%20pelo%20site%20e%20gostaria%20de%20falar%20com%20o%20advogado%20Guilherme%20Quintiliano.%20Pode%20me%20ajudar?',
      target: '_blank',
    },
    {
      id: 'about',
      icon: (
        <span>
          <FaUser />
        </span>
      ),
      label: 'Sobre',
      href: '/#sobre',
    },
    {
      id: 'servicos',
      icon: (
        <span>
          <FaBalanceScale />
        </span>
      ),
      label: 'Áreas de Atuação',
      href: '/#servicos',
    },
  ];

  return (
    <header className="app-header">
      <div className="container header-container">
        <div className="logo">
          <Link to="/" className="logo-link">
            <FaBalanceScale /> Guilherme Quintiliano
          </Link>
        </div>
        <nav className="nav-container-desktop">
          {navItems.map((item) =>
            item.id === 'whatsapp' ? (
              <a
                key={item.id}
                href={item.href}
                target={item.target}
                rel={
                  item.target === '_blank' ? 'noopener noreferrer' : undefined
                }
                title={item.label}
                className="nav-link-desktop"
                aria-label={item.label}
              >
                <span className="nav-item-icon">{item.icon}</span>
                <span className="nav-label-desktop">{item.label}</span>
              </a>
            ) : (
              <Link
                key={item.id}
                to={item.href}
                title={item.label}
                className="nav-link-desktop"
                aria-label={item.label}
              >
                <span className="nav-item-icon">{item.icon}</span>
                <span className="nav-label-desktop">{item.label}</span>
              </Link>
            ),
          )}
        </nav>
        <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        {navItems.map((item) =>
          item.id === 'whatsapp' ? (
            <a
              key={item.id}
              href={item.href}
              target={item.target}
              rel={item.target === '_blank' ? 'noopener noreferrer' : undefined}
              className="mobile-menu-link"
              onClick={toggleMobileMenu}
            >
              {item.icon}{' '}
              <span className="mobile-menu-label">{item.label}</span>
            </a>
          ) : (
            <Link
              key={item.id}
              to={item.href}
              className="mobile-menu-link"
              onClick={toggleMobileMenu}
            >
              {item.icon}{' '}
              <span className="mobile-menu-label">{item.label}</span>
            </Link>
          ),
        )}
      </div>
    </header>
  );
}

export default Header;
