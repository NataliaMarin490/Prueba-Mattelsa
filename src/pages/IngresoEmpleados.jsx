import React, { useState, useEffect, useRef } from "react";
import registro from "../media/registro.png";

// const lista = [
//   { identificacion: "1001131543",
//    fecha: "2021-12-23T05:24",
//   celda: "86" },
// ];

const IngresoEmpleados = () => {
  const [inputValue, setInputValue] = useState("");
  const [resultado, setResultado] = useState([]);
  const [datos, setDatos] = useState([]);
  const [datosIng, setDatosIng] = useState([]);
  const [text, setText] = useState(false);
  const [mes,setMes]=useState();
  const form = useRef(null);

  useEffect(() => {
    setDatos(JSON.parse(localStorage.getItem("user")));
    //localStorage.setItem("userEm", [JSON.stringify(lista)]);
  }, []);

  const buscar = (e) => {
    e.preventDefault();
    if (datos.find((i) => i.identificacion == inputValue)) {
      setText(true);
    } else {
      setText(false);
    }
    setResultado(datos.filter((i) => i.identificacion == inputValue));
    setMes((datosIng.filter((i) => i.identificacion == inputValue).length))
  };

  const submitForm = (e) => {
    e.preventDefault();
    const fd = new FormData(form.current);
    const nuevo = {};
    fd.forEach((value, key) => {
      nuevo[key] = value;
    });
    setDatosIng([...datosIng,nuevo]);
    localStorage.setItem("userEm", JSON.stringify([...datosIng,nuevo]));
  };

  return (
    <div className="vistantes">
      <img className="logo-registro" src={registro} alt="logo-registro" />
      <div className="busqueda">
        <form ref={form} onSubmit={submitForm} className="form-ingreso">
          <input
            className="input-visitantes"
            type="number"
            name="identificacion"
            placeholder="Identificación"
            required
            autoComplete="off"
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />
          <button onClick={buscar} type="submit" className="btn-visitantes1">
            Buscar
          </button>
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
          {}
          <button type="submit" className="btn-visitantes1">
            Enviar
          </button>
        </form>
        <div className="div-busqueda">
          {text ? (
            resultado.map((i) => {
              return (
                <div>
                  <span className="label-busqueda">Usuario Encontrado:</span>
                  <br />
                  {i.identificacion}
                  <br />
                  {i.vehiculo}
                  <br />
                  <br/>
                  <span>{`El usuario ${i.identificacion} ha ingresado ${mes} veces`}</span>
                </div>
              );
            })
          ) : (
            <span className="label-busqueda">
              Usuario no encontrado, por favor registrarlo
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default IngresoEmpleados;
// try {
//     res.map((i) => {
//       return console.log(
//         "Usuario Encontrado: ",
//         i.identificacion,
//         i.vehiculo
//       );
//     });
//   } catch (error) {
//     console.log("usuario no encontrado");
//   }
