import React, { useState, useEffect, useRef } from "react";
import empleados from "../media/empleados.png";

const listaEmpleados = [
  {
    identificacion: 1001131543,
    vehiculo: "carro",
    modelo: 2014,
    puertas: 4,
    placa: "MMF406",
  },
  {
    identificacion: 1152214528,
    vehiculo: "moto",
    cilindraje: 125,
    tiempos: 4,
    placa: "KHK16E",
  },
  {
    identificacion: 43644508,
    vehiculo: "bicicleta",
    marca: "Giant",
    color: "azul",
  },
];

const Empleados = () => {
  const [mostrarTabla, setMostrarTabla] = useState(true);
  const [textoBoton, setTextoBoton] = useState("Nuevo Registro");
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    if (!localStorage.user) {
      localStorage.setItem("user", JSON.stringify(listaEmpleados));
    }
    setDatos(JSON.parse(localStorage.getItem("user")));
  }, []);

  useEffect(() => {
    if (mostrarTabla) {
      setTextoBoton("Nuevo Registro");
    } else {
      setTextoBoton("Mostrar Usuarios");
    }
  }, [mostrarTabla]);
  return (
    <div className="mainContainer-empleados">
      <div className="top-empleados">
        <img className="logo-empleados" src={empleados} alt="logo-empleados" />
        <button
          onClick={() => {
            setMostrarTabla(!mostrarTabla);
          }}
          className="btn-info"
          type="button"
        >
          {textoBoton}
        </button>
      </div>

      {mostrarTabla ? (
        <Tabla datosEmpleados={datos} />
      ) : (
        <Formulario
          setMostrarTabla={setMostrarTabla}
          setDatos={setDatos}
          datosEmpleados={datos}
        />
      )}
    </div>
  );
};

const Tabla = ({ datosEmpleados }) => {
  useEffect(() => {
    console.log("listado: ", datosEmpleados);
  }, [datosEmpleados]);

  return (
    <div className="div-tabla">
      <h2>Empleados Registrados</h2>
      <div className="header1">
        <div className="cont-identificacion1">
          {datosEmpleados.map((datos) => {
            return (
              <div className="header">
                {datos.identificacion}
                <div className="cont-identificacion">
                  {datos.vehiculo === "carro" && (
                    <div>
                      <span>Carro</span> <br />
                      <span className="titulos">Modelo: </span> {datos.modelo}
                      <br />
                      <span className="titulos">Puetas: </span>
                      {datos.puertas}
                      <br />
                      <span className="titulos">Placa: </span>
                      {datos.placa}
                      <br />
                    </div>
                  )}
                </div>
                <div className="cont-identificacion">
                  {datos.vehiculo === "moto" && (
                    <div>
                      <span>Moto</span> <br />
                      <span className="titulos">Cilindraje: </span>
                      {datos.cilindraje}
                      <br />
                      <span className="titulos">Tiempos: </span>
                      {datos.tiempos}
                      <br />
                      <span className="titulos">Placa: </span>
                      {datos.placa}
                      <br />
                    </div>
                  )}
                </div>
                <div className="cont-identificacion">
                  {datos.vehiculo === "bicicleta" && (
                    <div>
                      <span>Bicicleta</span> <br />
                      <span>Marca: </span>
                      {datos.marca}
                      <br />
                      <span>Color:</span>
                      {datos.color}
                      <br />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const Formulario = ({ datosEmpleados, setMostrarTabla, setDatos }) => {
  const [valueSelect, setValueSelect] = useState("");
  const form = useRef(null);

  const submitForm = (e) => {
    e.preventDefault();
    const fd = new FormData(form.current);
    const nuevo = {};
    fd.forEach((value, key) => {
      nuevo[key] = value;
    });
    setMostrarTabla(true);
    setDatos([...datosEmpleados, nuevo]);
    localStorage.setItem("user", JSON.stringify([...datosEmpleados, nuevo]));
  };
  return (
    <div className="mainContainer-empleados">
      <div className="container-form">
        <form ref={form} onSubmit={submitForm} className="form-ingreso">
          <input
            className="input-identificacion"
            type="number"
            name="identificacion"
            placeholder="Identificación"
            required
            autoComplete="off"
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
            <option value="moto">Moto</option>
            <option value="carro">Carro</option>
            <option value="bicicleta">Bicicleta</option>
          </select>
          <div>
            {valueSelect === "moto" && (
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
                  defaultValue={""}
                  required
                  autoComplete="off"
                />
              </div>
            )}
            {valueSelect === "carro" && (
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
            )}
            {valueSelect === "bicicleta" && (
              <div className="grid-int">
                <span className="span-vh"> Bicicleta</span>
                <input
                  className="input-empleados"
                  type="text"
                  name="marca"
                  placeholder="Marca"
                  defaultValue={""}
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
            )}
          </div>
          <button type="submit" className="btn-visitantes1">
            Guardar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Empleados;
