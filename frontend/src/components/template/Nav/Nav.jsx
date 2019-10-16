import './Nav.css';
import React from 'react';
import { Link } from 'react-router-dom';

export default props =>
  <aside className='menu-area'>
    <nav className="menu">
      {/* Refactor to NavItem component */}
      <Link to="/">
        <i className="fa fa-home"></i> Início
      </Link>
      <Link to="/users">
        <i className="fa fa-user"></i> Usuários
      </Link>
    </nav>
  </aside>
