import React from 'react';
import logo from './logo.svg';
import TabelaApontamento from './tabela-apontamento/TabelaApontamento';
import './App.css';
import BaterPontoComponent from './bater-ponto/BaterPonto';

function App() {
  return (
    <div className="container">
      <div className="row">
          <div className="col header"></div>
               <nav className="nav">
               <h1><a className="nav-link active mx-5" href="#">LOGO</a></h1>
            <a className="nav-link mx-5" target="_blank" href="https://github.com/gvs006">GitHub</a>
            <a className="nav-link disabled mx-5" href="#">Logout -EM BREVE-</a>
            <span className="mx-5"></span>
            <span className="mx-5"></span>
            <span className="mx-5"></span>
            <span className="mx-5"></span>
            <a className="nav-link active" href="#">Apontamento de horas</a>
          </nav>
      </div>
      <div className="row">
        <div className="col-12 logo">
      <h2>APONTAMENTO DE HORAS</h2>
        </div>
      </div>
      <div>
        <div className="col-12 horarios"><TabelaApontamento /></div>
      </div>

      {/* Teste remover */}
      <div className="row">
        <div className="col center"><BaterPontoComponent /></div>
      </div>
    </div>
  );
}

export default App;
