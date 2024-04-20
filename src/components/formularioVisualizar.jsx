import React, { useState } from "react";
import VisualizarDirector from "./visualizaciones/visualizacionDirector";
import VisualizarGenero from "./visualizaciones/visualizacionGenero";
import VisualizarMedia from "./visualizaciones/visualizacionMedia";
import VisualizarProductora from "./visualizaciones/visualizacionProductora";
import VisualizarTipo from "./visualizaciones/visualizacionTipo";

export default function FormularioVisualizar() {

  const [modulo, setModulo] = useState(false);
  const handleChange = (event) => {
    setModulo(event.target.value);
  };

  let formulario;
  switch (modulo) {
    case "modulo1":
      formulario = <VisualizarDirector />;
      break;
    case "modulo2":
      formulario = <VisualizarGenero />;
      break;
    case "modulo3":
      formulario = <VisualizarMedia />;
      break;
    case "modulo4":
      formulario = <VisualizarProductora />;
      break;
    case "modulo5":
      formulario = <VisualizarTipo />;
      break;
    default:
      formulario = null;
  }
  return (
    <>
      <div className="absolute top-32 left-44 w-[70%] h-[400px] border-[5px] border-[#1f2937] p-[20px] bg-[#f4f4f4]">
        <h1 className="font-bold text-3xl">Visualizacion de Modulos</h1>
        <span className="font-extralight">Escoge el modulo:</span>
        <select className="block" value={modulo} onChange={handleChange}>
          <option value="modulo0">Ninguno</option>
          <option value="modulo1">Director</option>
          <option value="modulo2">Genero</option>
          <option value="modulo3">Pelicula</option>
          <option value="modulo4">Productora</option>
          <option value="modulo5">Tipo</option>
        </select>
        {formulario}
      </div>
    </>
  );
}