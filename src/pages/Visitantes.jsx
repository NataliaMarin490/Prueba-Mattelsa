import React from "react";
import registro from "../media/registro.png";

const Visitantes = () => {
  return (
    <div className="vistantes">
      <img className="logo-registro" src={registro} alt="logo-registro" />
      <div className="form-registro">
        <span className="bienvenido">¡Bienvenido!</span>
        <form>
          <input
            className="input-visitantes"
            type="text"
            name="nombre"
            placeholder="Nombre"
            required
            autoComplete="off"
          />
          <input
            className="input-visitantes"
            type="text"
            name="apellido"
            placeholder="Apellido"
            required
            autoComplete="off"
          />
          <input
            className="input-visitantes"
            type="number"
            name="identificacion"
            placeholder="Identificación"
            required
            autoComplete="off"
          />
          <button
            type="submit"
            className="btn-visitantes1"
          >
            Registrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Visitantes;
