import React, { useState } from "react";
import { useParams } from "react-router-dom";

export default function FormularioDirector() {
  const { id } = useParams();
  const [Nombre, setNombre] = useState("");
  const [Estado, setEstado] = useState("");
  const [fechaCreacion, setFechaCreacion] = useState("");
  const [fechaActualizacion, setFechaActualizacion] = useState("");

  const handleNombre = (e) => {
    setNombre(e.target.value);
  };
  const handleEstado = (e) => {
    setEstado(e.target.value);
  };
  const handlefechaCreacion = (e) => {
    setFechaCreacion(e.target.value);
  };
  const handleFechaActualizacion = (e) => {
    setFechaActualizacion(e.target.value);
  };

  const onsubmit = async (e) => {
    e.preventDefault();

    const datos = {
      Nombre,
      Estado,
      fechaCreacion,
      fechaActualizacion,
    };

    const response = await fetch(`${import.meta.env.VITE_PETICION}/director/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datos),
    });
    if (response.ok) {
      const jsonResponse = await response.json();
      console.log(jsonResponse);
    } else {
      console.log("Error en la peticion");
    }
  };

  return (
    <React.Fragment>
      <div className="">
        <h1 className="moduloh text-2xl">Modulo Director</h1>
        <form method="post" className="block" onSubmit={onsubmit}>
          <label className="block">Completa los siguientes campos:</label>
          <input
            className="my-3 mx-1"
            type="text"
            value={Nombre}
            onChange={handleNombre}
            placeholder="Nombre"
          />

          <input
            className="my-3 mx-1"
            type="text"
            value={Estado}
            onChange={handleEstado}
            placeholder="Estado"
          />

          <input
            className="my-3 mx-1"
            type="date"
            value={fechaCreacion}
            onChange={handlefechaCreacion}
            placeholder="Fecha de Creacion"
          />

          <input
            className="my-3 mx-1"
            type="date"
            value={fechaActualizacion}
            onChange={handleFechaActualizacion}
            placeholder="Fecha de Actualizacion"
          />
          <button className="block" type="submit">
            Enviar
          </button>
        </form>
      </div>
    </React.Fragment>
  );
}
