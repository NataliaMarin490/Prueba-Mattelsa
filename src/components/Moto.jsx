import React from "react";

const Moto = () => {
  return (
    <div className="grid-int">
      <span className="span-vh">Moto</span>
      <input
        className="input-empleados"
        type="number"
        name="cilindraje"
        placeholder="Cilindraje"
        required
        autoComplete="off"
        min={0}
      />
      <input
        className="input-empleados"
        type="number"
        name="tiempos"
        placeholder="Tiempos"
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

export default Moto;
