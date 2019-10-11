import './App.css';
import React from 'react';

import Logo from '../components/template/Logo/Logo';
import Nav from '../components/template/Nav/Nav';
import Main from '../components/template/Main/Main';
import Footer from '../components/template/Footer/Footer';

export default props =>
  <div className='app'>
    <Logo />
    <Nav />
    <Main />
    <Footer />
  </div>