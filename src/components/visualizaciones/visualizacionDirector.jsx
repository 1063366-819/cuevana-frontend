import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function VisualizacionDirector() {
  const [modulos, setModulo] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await fetch("http://localhost:12330/director");
      const data = await response.json();
      console.log(data);
      setModulo(data);
    } catch {
      console.error("404");
    }
  };

  const deleteModulo = async (id) => {
    try {
      const response = await fetch(`http://localhost:12330/director/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Error al eliminar el módulo");
      }
      // Actualiza la lista de módulos después de eliminar
      setModulo(modulos.filter((modulo) => modulo._id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <div className="overflow-auto overscroll-y-auto">
        <h1 className="text-2xl font-semibold text-center mb-2">
          Vista Previa
        </h1>
        <table className="my-table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Estado</th>
              <th>Fecha de Creacion</th>
              <th>Fecha de Actualizacion</th>
            </tr>
          </thead>
          <tbody>
            {modulos.map((modulo) => (
              <tr key={modulo._id} onSubmit={onsubmit}>
                <td>{modulo.Nombre}</td>
                <td>{modulo.Estado}</td>
                <td>{modulo.fechaCreacion}</td>
                <td>{modulo.fechaActualizacion}</td>
                <td>
                  <Link to={`/editar/director/${modulo._id}`} type="button">
                    Editar
                  </Link>
                </td>
                <td>
                  <button
                    type="button"
                    onClick={() => deleteModulo(modulo._id)}
                  >
                    Borrar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
