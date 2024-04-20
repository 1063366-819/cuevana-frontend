import React, { useState } from "react";
import EditarDirector from "./actualizacion/editarDirector";
import EditarGenero from "./actualizacion/editarGenero";
import EditarMedia from "./actualizacion/editarMedia";
import EditarProductora from "./actualizacion/editarProductora";
import EditarTipo from "./actualizacion/editarTipo";

export default function FormularioEditar({ modulo, match }) {
  const renderFormulario = (modulo) => {
    switch (modulo) {
      case "modulo1":
        return <EditarDirector />;
      case "modulo2":
        return <EditarGenero />;
      case "modulo3":
        return <EditarMedia />;
      case "modulo4":
        return <EditarProductora />;
      case "modulo5":
        return <EditarTipo  />;
      default:
        return null;
    }
  };

  
  return <div>{renderFormulario(modulo)}</div>;
}
