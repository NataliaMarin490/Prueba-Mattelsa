import React from "react";

const Bicicleta = () => {
  return (
    <div className="grid-int">
      <span className="span-vh"> Bicicleta</span>
      <input
        className="input-empleados"
        type="text"
        name="marca"
        placeholder="Marca"
        required
        autoComplete="off"
      />
      <input
        className="input-empleados"
        type="text"
        name="color"
        placeholder="Color"
        required
        autoComplete="off"
      />
    </div>
  );
};

export default Bicicleta;
