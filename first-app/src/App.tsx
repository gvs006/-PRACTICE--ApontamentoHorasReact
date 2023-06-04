import React, { useEffect, useState } from "react";
import TabelaApontamento from "./tabela-apontamento/TabelaApontamento";
import "./App.css";
import BaterPontoComponent from "./bater-ponto/BaterPonto";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    // This effect will run when `isOpen` changes
    if (isOpen) {
      // Code to open the modal
      // For example, you can add a class to the modal container to display it
      document.body.classList.add("modal-open");
      console.log("fechou");
    } else {
      // Code to close the modal
      // For example, you can remove the class from the modal container
      document.body.classList.remove("modal-open");
      console.log("abriu");
    }

    // Clean up the effect
    return () => {
      // Code to run when component unmounts or `isOpen` changes again
      // For example, you can remove event listeners or reset any necessary state
    };
  }, [isOpen]);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

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
          <a
            className="nav-link mx-5"
            target="_blank"
            href="https://github.com/gvs006"
          >
            GitHub
          </a>
          <span className="mx-5"></span>
          <span className="mx-5"></span>
          <span className="mx-5"></span>
          <span className="mx-5"></span>
          <button
            className="bi-alarm"
            onClick={handleOpenModal}
            data-toggle="modal"
            data-target="#hourPickerModal"
          ></button>
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
    </div>
  );
}

export default App;
