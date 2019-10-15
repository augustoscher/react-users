import './Nav.css';
import React from 'react';

export default props =>
  <aside className='menu-area'>
    <nav className="menu">
      {/* Refactor to NavItem component */}
      <a href="#/">
        <i className="fa fa-home"></i> Início
      </a>
      <a href="#/">
        <i className="fa fa-user"></i> Usuários
      </a>
    </nav>
  </aside>
