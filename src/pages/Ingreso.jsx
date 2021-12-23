import React, { useState } from "react";
import registro from "../media/registro.png";
import Moto from "../components/Moto";
import Carro from "../components/Carro";
import Bicicleta from "../components/Bicicleta";

const Ingreso = () => {
  const [valueSelect, setValueSelect] = useState("");

  return (
    <div className="vistantes">
      <img className="logo-registro" src={registro} alt="logo-registro" />
      <div>
        <form className="form-ingreso">
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
          <select
            name="vehiculo"
            id="vehiculo"
            required
            defaultValue={0}
            className="lista-ingreso"
            onChange={(e) => {
              setValueSelect(e.target.value);
            }}
          >
            <option disabled value={0}>
              Seleccione una opción
            </option>
            <option value="M">Moto</option>
            <option value="C">Carro</option>
            <option value="B">Bicicleta</option>
          </select>
          <div>
            {valueSelect === "M" && <Moto />}
            {valueSelect === "C" && <Carro />}
            {valueSelect === "B" && <Bicicleta />}
          </div>
          <button type="submit" className="btn-visitantes1">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Ingreso;
