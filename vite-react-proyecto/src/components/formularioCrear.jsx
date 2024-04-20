import React, { useState } from "react";
import FormularioDirector from "./formularios/formularioDirector";
import FormularioGenero from "./formularios/formularioGenero";
import FormularioMedia from "./formularios/formularioMedia";
import FormularioProductora from "./formularios/formularioProductora";
import FormularioTipo from "./formularios/formularioTipo";

export default function FormularioCrear() {

  const [modulo, setModulo] = useState(false);
  const handleChange = (event) => {
    setModulo(event.target.value);
  };

  let formulario;
  switch (modulo) {
    case "modulo1":
      formulario = <FormularioDirector />;
      break;
    case "modulo2":
      formulario = <FormularioGenero />;
      break;
    case "modulo3":
      formulario = <FormularioMedia />;
      break;
    case "modulo4":
      formulario = <FormularioProductora />;
      break;
    case "modulo5":
      formulario = <FormularioTipo />;
      break;
    default:
      formulario = null;
  }
  return (
    <>
      <div className="absolute top-20 left-44 w-[70%] h-auto border-[5px] border-[#1f2937] p-[20px] mb-8 bg-[#f4f4f4]">
        <h1 className="font-bold text-3xl">Creacion de Modulo</h1>
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
