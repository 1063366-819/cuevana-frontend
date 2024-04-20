import React, { useState } from "react";

export default function FormularioMedia() {
  const [tittle, settittle] = useState("");
  const [sipnosis, setsipnosis] = useState("");
  const [link, setlink] = useState("");
  const [image, setImage] = useState("");
  const [premios, setPremios] = useState("");
  const [genero, setgenero] = useState("");
  const [director, setDirector] = useState("");
  const [productora, setProductora] = useState("");
  const [tipo, setTipo] = useState("");
  const [creandoEn, setcreandoEn] = useState("");
  const [actualizadoEn, setactualizadoEn] = useState("");

  const handletittle = (e) => {
    settittle(e.target.value);
  };
  const handlesipnosis = (e) => {
    setsipnosis(e.target.value);
  };
  const handleLink = (e) => {
    setlink(e.target.value);
  };
  const handleimage = (e) => {
    setImage(e.target.value);
  };
  const handlepremios = (e) => {
    setPremios(e.target.value);
  };
  const handlegenero = (e) => {
    setgenero(e.target.value);
  };
  const handleDirector = (e) => {
    setDirector(e.target.value);
  };
  const handleProductora = (e) => {
    setProductora(e.target.value);
  };
  const handleTipo = (e) => {
    setTipo(e.target.value);
  };
  const handleCreadoEn = (e) => {
    setcreandoEn(e.target.value);
  };
  const handleActualizadoEn = (e) => {
    setactualizadoEn(e.target.value);
  };

  const onsubmit = async (e) => {
    e.preventDefault();

    const datos = {
      tittle,
      sipnosis,
      link,
      image,
      premios,
      genero,
      director,
      productora,
      tipo,
      creandoEn,
      actualizadoEn,
    };

    const response = await fetch('http://localhost:12330/media',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(datos)
    })

    if(response.ok){
      const jsonResponse = await response.json();
      console.log(tittle, sipnosis, link, image, premios, genero, director, productora, tipo, creandoEn, actualizadoEn);
      console.log(jsonResponse);
    }else {
      console.log('Error al enviar los datos');
    }
  };

  return (
    <React.Fragment>
      <div className="">
        <h1 className="text-2xl">Modulo Pelicula</h1>
        <form method="post" className="block" onSubmit={onsubmit}>
          <label className="block">Completa los siguientes campos:</label>
          <input
            className="my-3 mx-1"
            type="text"
            value={tittle}
            onChange={handletittle}
            placeholder="tittle"
          />

          <input
            className="my-3 mx-1"
            type="text"
            value={sipnosis}
            onChange={handlesipnosis}
            placeholder="sipnosis"
          />

          <input
            className="my-3 mx-1"
            type="date"
            value={creandoEn}
            onChange={handleCreadoEn}
            placeholder="Fecha de Creacion"
          />

          <input
            className="my-3 mx-1"
            type="date"
            value={actualizadoEn}
            onChange={handleActualizadoEn}
            placeholder="Fecha de Actualizacion"
          />

          <input
            className="my-3 mx-1"
            type="text"
            value={link}
            onChange={handleLink}
            placeholder="link"
          />

          <input
            className="my-3 mx-1"
            type="text"
            value={image}
            onChange={handleimage}
            placeholder="image"
          />

          <input
            className="my-3 mx-1"
            type="text"
            value={premios}
            onChange={handlepremios}
            placeholder="premios"
          />

          <input
            className="my-3 mx-1"
            type="text"
            value={genero}
            onChange={handlegenero}
            placeholder="genero"
          />

          <input
            className="my-3 mx-1"
            type="text"
            value={director}
            onChange={handleDirector}
            placeholder="director"
          />

          <input
            className="my-3 mx-1"
            type="text"
            value={productora}
            onChange={handleProductora}
            placeholder="productora"
          />

          <input
            className="my-3 mx-1"
            type="text"
            value={tipo}
            onChange={handleTipo}
            placeholder="tipo"
          />
          <button className="block" type="submit">
            Enviar
          </button>
        </form>
      </div>
    </React.Fragment>
  );
}
