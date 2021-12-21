import React from "react";
import registro from "../media/registro.png";

const Ingreso = () => {
  return (
    <div className="vistantes">
      <img className="logo-registro" src={registro} alt="logo-registro" />
      <div className="form-registro">
        <span className="bienvenido">¡Bienvenido!</span>
        <form>
          <input
            className="input-visitantes"
            type="number"
            name="identificacion"
            placeholder="Identificación"
            required
            autoComplete="off"
          />
          <input
            className="input-visitantes"
            type="datetime-local"
            name="fecha"
            required
            autoComplete="off"
          />
          <input
            className="input-visitantes"
            type="number"
            name="celda"
            required
            autoComplete="off"
            placeholder="Celda"
          />
          <button type="submit" className="btn-visitantes1">
            Registrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Ingreso;
