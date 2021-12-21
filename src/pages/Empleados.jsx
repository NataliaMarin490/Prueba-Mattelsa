import React from "react";
import empleados from "../media/empleados.png";

const Empleados = () => {
  return (
    <div className="mainContainer-empleados">
      <img className="logo-empleados" src={empleados} alt="logo-empleados" />
      <div>
        <form className="form-empleados">
          <div className="div-id">
          <input
            className="input-identificacion"
            type="number"
            name="identificacion"
            placeholder="Identificación"
            required
            autoComplete="off"
          />
          </div>
          <div className="container-vehiculos">
            <div className="grid-int">
            <span>Moto</span>
            <input
              className="input-empleados"
              type="number"
              name="cilindraje"
              placeholder="Cilindraje"
              required
              autoComplete="off"
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
            <div className="grid-int">
            <span>Carro</span>
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
            <div className="grid-int">
            <span>Bicicleta</span>
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
          </div>
          <button type="submit" className="btn-empleados1">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Empleados;
