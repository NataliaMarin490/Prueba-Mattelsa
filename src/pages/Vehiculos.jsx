import React from "react";

const Vehiculos = () => {
  return (
    <div className="div-vehiculo">
      <span className="span-index">¿En qué vehículo vienes hoy?</span>
      <button className="btn-vehiculo1" type="button">
        Bicicleta
      </button>
      <button className="btn-vehiculo1" type="button">
        Carro
      </button>
      <button className="btn-vehiculo1" type="button">
        Moto
      </button>
    </div>
  );
};

export default Vehiculos;
