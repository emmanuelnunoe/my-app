import React, { useState } from "react";

const Formulario = () => {
  const [fruta, setFruta] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const estadoInicial = [];
  const [lista, setLista] = useState(estadoInicial);

  const guardarDatos = (e) => {
    e.preventDefault();
    if (!fruta.trim()) {
      console.log("esta vacio fruta");
      return;
    }
    if (!descripcion.trim()) {
      console.log("esta vacio descripcion");
      return;
    }

    console.log("procesando datos..." + fruta + " " + descripcion);
    setLista([...lista, { miFruta: fruta, miDescripcion: descripcion }]);
    e.target.reset();
    setFruta("");
    setDescripcion("");
  };
  return (
    <div>
      <h2>Formulario</h2>
      <form onSubmit={guardarDatos}>
        <input
          type="text"
          name="name"
          id=""
          placeholder="ingrese fruta"
          className="form-control mb-2"
          onChange={(e) => setFruta(e.target.value)}
        />

        <input
          type="description"
          name="name"
          id=""
          placeholder="ingrese descripcion"
          className="form-control mb-2"
          onChange={(e) => setDescripcion(e.target.value)}
        />
        <button className="btn btn-primary btn-block" type="submit">
          Ingresar
        </button>
      </form>
      <div>
        <h2>Lista de Frutas</h2>
        <ul>
          {lista.map((item, index) => (
            <li key={index}>
              {item.miFruta} - {item.miDescripcion}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Formulario;
