import React from "react";
import './TabelaApontamento.css';

const TabelaApontamento = () => {
    return (
      
        <table className="table">
  <thead className="thead-dark">
    <tr className="title">
      <th scope="col">Dia</th>
      <th scope="col">Hora Entrada</th>
      <th scope="col">Hora Saída</th>
      <th scope="col">Total do Dia</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">DD/MM/YYYY</th>
      <td>08:30</td>
      <td>18:00</td>
      <td>08:00</td>
    </tr>
    <tr>
      <th scope="row">DD/MM/YYYY</th>
      <td>08:30</td>
      <td>18:00</td>
      <td>08:00</td>
    </tr>
    <tr>
      <th scope="row">DD/MM/YYYY</th>
      <td>08:30</td>
      <td>18:00</td>
      <td>08:00</td>
    </tr>
  </tbody>
</table>
     
    );
  };
  
  export default TabelaApontamento;