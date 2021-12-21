import React from "react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="div-index">
      <span className="h1-index">
        Gestión y Administración Parqueadero <span>Mattelsa</span>
      </span>
      <div className="grid-index">
        <Link to="/empleados">
          <button className="btn-vehiculo">Registrar Empleado</button>
        </Link>
        <Link to="/ingreso">
          <button className="btn-vehiculo">Ingresar vehiculo</button>
        </Link>
      </div>
    </div>
  );
};

export default Index;
