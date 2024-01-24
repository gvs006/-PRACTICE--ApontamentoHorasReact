import React, { useState } from "react";
import "./BaterPonto.css";

const BaterPontoComponent = () => {
  const [entrada, setEntrada] = useState("");
  const [saida, setSaida] = useState("");

  const horaAtual = new Date().toLocaleTimeString();

  const registrarEntrada = () => {
    if (entrada === "") {
      console.log(
        "Entrada Registrada as " + horaAtual + "começar contador de horas/min"
      );
      setEntrada(horaAtual);
    } else console.log("ERRO: Registre a saída");
  };

  const registrarSaida = () => {
    if (saida === "" || entrada !== "") {
    } else {
      setSaida(horaAtual);
      console.log(
        "Saída Registrada as " + horaAtual + "calcular horas rodadas totais"
      );
      setEntrada("");
    }
  };

  const calcularHoras = () => {
    return console.log("retornar horas calculadas");
  };

  return (
    <div className="row">
      <div className="col">
        <button className="btn-register" onClick={registrarEntrada}>
          Registrar Entrada
        </button>
        <div>22:22</div>
        </div>
        <div className="col">
        <button className="btn-register" onClick={registrarSaida}>
          Registrar Saída
        </button>
        <div>23:23</div>
      </div>
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
