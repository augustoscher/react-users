import './Main.css';
import React from 'react';
import Header from '../Header/Header';

const Main = ({ icon, title, subtitle }) => (
  <>
    <Header icon={icon} title={title} subtitle={subtitle} />
    <main className="content">Conteudo</main>
  </>
);
export default Main;
