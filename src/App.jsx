import React from "react";
import Navegador from "./components/navegador";
import { Route, Routes } from "react-router-dom";
import { useState } from "react"
import FormularioVisualizar from "./components/formularioVisualizar";
import FormularioCrear from "./components/formularioCrear";
import FormularioEditar from "./components/formularioEditar";
import "./App.css";
import "./buscador.css";

function App() {
  const urlBase = 'https://api.themoviedb.org/3/search/movie'
  const API_KEY = '52244d18761f67e2dff7269bf3e3790b'

  const [busqueda, setBusqueda] = useState('')
  const [peliculas, setPeliculas] = useState([])

  const handleInputChange = (e) => {
    setBusqueda(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    fetchPeliculas()
  }

  const fetchPeliculas = async () => {
    try {
      const response = await fetch(`${urlBase}?query=${busqueda}&api_key=${API_KEY}`)
      const data = await response.json()
      console.log(data.results)
      setPeliculas(data.results)
    } catch (error) {
      console.error('Ha ocurrido un error: ', error)
    }
  }
  return (
    <>
      <Navegador />
      <div className="container">
        <h1 className="title">Buscador de Películas</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Escribí una película"
            value={busqueda}
            onChange={handleInputChange}
          />
          <button type="submit" className="search-button">
            Buscar
          </button>
        </form>

        <div className="movie-list">
          {peliculas.map((pelicula) => (
            <div key={pelicula.id} className="movie-card">
              <img
                src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`}
                alt={pelicula.title}
              />
              <h2>{pelicula.title}</h2>
              <p>{pelicula.overview}</p>
            </div>
          ))}
        </div>
      </div>
      <Routes>
        <Route path="/" element={<></>} />
        <Route path="/crear" element={<FormularioCrear />} />
        <Route path="/visualizar" element={<FormularioVisualizar />} />
        <Route
          path="/editar/director/:id"
          element={<FormularioEditar modulo="modulo1" />}
        />
        <Route
          path="/editar/genero/:id"
          element={<FormularioEditar modulo="modulo2" />}
        />
        <Route
          path="/editar/media/:id"
          element={<FormularioEditar modulo="modulo3" />}
        />
        <Route
          path="/editar/productora/:id"
          element={<FormularioEditar modulo="modulo4" />}
        />
        <Route
          path="/editar/tipo/:id"
          element={<FormularioEditar modulo="modulo5" />}
        />
      </Routes>
    </>
  );
}

export default App;
