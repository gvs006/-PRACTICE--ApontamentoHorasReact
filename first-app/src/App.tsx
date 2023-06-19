import React, { useEffect, useState } from "react";
import TabelaApontamento from "./tabela-apontamento/TabelaApontamento";
import "./App.css";
import BaterPontoComponent from "./bater-ponto/BaterPonto";

function App() {

  const [openModal, setOpenModal] = useState(false);

// useEffect(() => {
// if (!openModal) { return openModal;}
// },[openModal]);
  
  return (
    <div className="container">
      <div className="row">
        <div className="col header"></div>
        <nav className="nav">
          <h1>
            <a className="nav-link active mx-5" href="#">
              LOGO
            </a>
          </h1>
          <span className="mx-5"></span>
          <span className="mx-5"></span>
          <span className="mx-5"></span>
          <span className="mx-5"></span>
          <button className="bi-alarm"></button>
        </nav>
      </div>

      <div className="col-12">
        <TabelaApontamento />
      </div>

      {/* Teste remover */}
      <div className="row">
        <div className="col center">
          <BaterPontoComponent />
        </div>
      </div>

      <div className="row">
        <div className="col">
          
        
      
      </div>
      
      </div>
    </div>
  );
}

export default App;
