import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="row">
          <div className="col header"></div>
               <nav className="nav">
               <h1><a className="nav-link active" href="#">LOGO</a></h1>
            <a className="nav-link" target="_blank" href="https://github.com/gvs006">GitHub</a>
            <a className="nav-link disabled" href="#">Logout -EM BREVE-</a>
            <a className="nav-link active" href="#">Apontamento de horas</a>
          </nav>
      </div>
      <div className="row">
        <div className="col-12 logo">
APONTAMENTO DE HORAS --LOGO-FULL--
        </div>
        
      </div>
      <div className="row">
        <div className="col-4 horarios">
<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Registrar Horário
</button></div>
        <div className="col-4 horarios">2</div>
        <div className="col-4 horarios">3</div>
      </div>
    </div>
  );
}

export default App;
