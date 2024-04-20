import React, { useState } from "react";
import { useParams } from "react-router-dom";

export default function FormularioProductora() {
  const { id } = useParams();
  const [nombre, setNombre] = useState("");
  const [estado, setEstado] = useState("");
  const [slogan, setSlogan] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [fechaCreacion, setFechaCreacion] = useState("");
  const [fechaActualizacion, setFechaActualizacion] = useState("");

  const handleNombre = (e) => {
    setNombre(e.target.value);
  };
  const handleEstado = (e) => {
    setEstado(e.target.value);
  };
  const handleSlogan = (e) => {
    setSlogan(e.target.value);
  };
  const handleDescripcion = (e) => {
    setDescripcion(e.target.value);
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
      nombre,
      estado,
      slogan,
      descripcion,
      fechaCreacion,
      fechaActualizacion,
    };

    const response = await fetch(`http://localhost:12330/productora/${id}`, {
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
        <h1 className="text-2xl">Modulo Productora</h1>
        <form method="post" className="block" onSubmit={onsubmit}>
          <label className="block">Completa los siguientes campos:</label>
          <input
            className="my-3 mx-1"
            type="text"
            value={nombre}
            onChange={handleNombre}
            placeholder="nombre"
          />

          <input
            className="my-3 mx-1"
            type="text"
            value={estado}
            onChange={handleEstado}
            placeholder="estado"
          />

          <input
            className="my-3 mx-1"
            type="text"
            value={slogan}
            onChange={handleSlogan}
            placeholder="slogan"
          />

          <input
            className="my-3 mx-1"
            type="text"
            value={descripcion}
            onChange={handleDescripcion}
            placeholder="descripcion"
          />

          <input
            className="my-3 mx-1"
            type="date"
            value={fechaCreacion}
            onChange={handlefechaCreacion}
            placeholder="fechaCreacion"
          />

          <input
            className="my-3 mx-1"
            type="date"
            value={fechaActualizacion}
            onChange={handleFechaActualizacion}
            placeholder="fechaCreacion"
          />
          <button className="block" type="submit">
            Enviar
          </button>
        </form>
      </div>
    </React.Fragment>
  );
}
