import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function VisualizacionMedia() {
  const [modulos, setModulo] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await fetch("http://localhost:12330/Media");
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
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Error al eliminar el módulo');
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
              <th>Titulo</th>
              <th>Sinopsis</th>
              <th>Link</th>
              <th>Imagen</th>
              <th>Premio Anual</th>
              <th>Genero</th>
              <th>Director</th>
              <th>Productor</th>
              <th>Tipo</th>
              <th>Creado en</th>
              <th>Actualizado en</th>
            </tr>
          </thead>
          <tbody>
            {modulos.map((modulo) => (
              <tr key={modulo._id}>
                <td>{modulo.tittle}</td>
                <td>{modulo.sinopsis}</td>
                <td>{modulo.link}</td>
                <td>{modulo.image}</td>
                <td>{modulo.premios}</td>
                <td>{modulo.genero}</td>
                <td>{modulo.director}</td>
                <td>{modulo.productora}</td>
                <td>{modulo.tipo}</td>
                <td>{modulo.creadoEn}</td>
                <td>{modulo.actualizadoEn}</td>
                <td>
                  <Link
                    to={`/editar/media/${modulo._id}`}
                    type="button"
                  >
                    Editar
                  </Link>
                </td>
                <td>
                  <button type="button" onClick={() => deleteModulo(modulo._id)}>Borrar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
