import React, { useState } from "react";

const BaterPontoComponent = () => {

    const [inputHorario, setHorario] = useState({ inicioExpediente: '', fimExpediente: '' });

    const handleChange = (e: any) => {
        setHorario({ ...inputHorario, [e.target.name]: e.target.value });
      };

      const handleSubmit = (e: any) => {
        e.preventDefault();
        // Convert inputHorario to JSON and save it to a file or send it to an API
        const jsonData = JSON.stringify(inputHorario);

        // Perform the necessary logic to save jsonData to a file or API
        console.log(jsonData);
      };
 return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
         Início 
          <input
            type="text"
            name="field1"
            value={inputHorario.inicioExpediente}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Fim
          <input
            type="text"
            name="field2"
            value={inputHorario.fimExpediente}
            onChange={handleChange}
          />
        </label>
        <br />

        <button 
        className="btn btn-primary" 
        type="submit" 
        data-toggle="modal" 
        data-target="#exampleModal">Salvar horas
        </button>
        
      </form>
    </div>
  );
};

export default BaterPontoComponent;