import './Main.css';
import React from 'react';
import Header from '../Header/Header';

const Main = ({ icon, title, subtitle, children }) => (
  <>
    <Header icon={icon} title={title} subtitle={subtitle} />
    <main className="content container-fluid">
      <div className="p-3 mt-3">
        {children}
      </div>
    </main>
  </>
);
export default Main;
