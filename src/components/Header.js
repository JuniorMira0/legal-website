import React, { useState } from 'react';
import {
  FaWhatsapp,
  FaBars,
  FaTimes,
  FaUser,
  FaBalanceScale,
} from 'react-icons/fa';
import './Header.css';

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
      href: '#sobre',
    },
    {
      id: 'servicos',
      icon: (
        <span>
          <FaBalanceScale />
        </span>
      ),
      label: 'Áreas de Atuação',
      href: '#servicos',
    },
  ];

  return (
    <header className="app-header">
      <div className="container header-container">
        <div className="logo">Guilherme Quintiliano</div>

        <nav className="nav-container-desktop">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              target={item.target}
              rel={item.target === '_blank' ? 'noopener noreferrer' : undefined}
              title={item.label}
              className="nav-icon"
              aria-label={item.label}
            >
              {item.icon}
            </a>
          ))}
        </nav>

        {/* Botão Hambúrguer (só aparece em mobile) */}
        <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Menu Mobile Dropdown */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        {navItems.map((item) => (
          <a
            key={item.id}
            href={item.href}
            target={item.target}
            rel={item.target === '_blank' ? 'noopener noreferrer' : undefined}
            className="mobile-menu-link"
            onClick={toggleMobileMenu}
          >
            {item.icon} <span className="mobile-menu-label">{item.label}</span>
          </a>
        ))}
      </div>
    </header>
  );
}

export default Header;
