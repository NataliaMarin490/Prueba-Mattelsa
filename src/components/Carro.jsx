import React from "react";

const Carro = () => {
  return (
    <div className="grid-int">
      <span className="span-vh">Carro</span>
      <input
        className="input-empleados"
        type="number"
        name="modelo"
        placeholder="Modelo"
        required
        autoComplete="off"
        min={1980}
        max={2022}
      />
      <input
        className="input-empleados"
        type="number"
        name="puertas"
        placeholder="Número de puertas"
        required
        autoComplete="off"
        min={2}
        max={4}
      />
      <input
        className="input-empleados"
        type="text"
        name="placa"
        placeholder="Placa"
        required
        autoComplete="off"
      />
    </div>
  );
};

export default Carro;
