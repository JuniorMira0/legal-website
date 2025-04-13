import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="app-header">
      <div className="container header-container">
        <div className="logo">Guilherme Quintiliano</div>
        <nav>
          <span className="nav-icon">Icon1</span>
          <span className="nav-icon">Icon2</span>
          <span className="nav-icon">Icon3</span>
        </nav>
      </div>
    </header>
  );
}

export default Header;
