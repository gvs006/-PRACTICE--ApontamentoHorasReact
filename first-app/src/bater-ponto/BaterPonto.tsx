import React, { useEffect, useState } from "react";
import "./BaterPonto.css";

const BaterPontoComponent = () => {
    const [entrada, setEntrada] = useState("");
    const [saida, setSaida] = useState("");

    const horaAtual = new Date().toLocaleTimeString();

    const registrarEntrada = () => {
        if(saida){
            console.log("Você já registrou a saída");    
        }else 
      setEntrada(horaAtual);
    }
    
  
    const registrarSaida = () => {
     const horaAtual = new Date().toLocaleTimeString();
      setSaida(horaAtual);
    };
  
    useEffect(() => {
      if (entrada) {  
        console.log('Registrando entrada:', entrada);
      }
      if (saida) {
        console.log('Registrando saída:', saida);
      }
    }, [entrada, saida]);
  

  return (
    
    <div>
    <button onClick={registrarEntrada}>Registrar Entrada</button>
    <button onClick={registrarSaida}>Registrar Saída</button>
  </div>



// TODO BOTAO FORM PARA ALTERAR HORARIO (SÓ PRA ROLE USER_ADMIN)
    //
    // <div>
    //   <div className="cs-form">
    //     <input type="time" className="form-control" value="`$time`" />
    //   </div>

    //   <button
    //     className="btn btn-primary"
    //     type="submit"
    //     data-toggle="modal"
    //     data-target="#hourPickerModal"
    //   >
    //     Salvar horas
    //   </button>
    // </div>
);
};

export default BaterPontoComponent;
