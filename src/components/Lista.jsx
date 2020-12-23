import React, { useState } from "react";

const Lista = () => {
  const estadoInicial = [
    { id: 1, texto: "tarea1" },
    { id: 2, texto: "tarea2" },
    { id: 3, texto: "tarea3" },
  ];
  const [lista, setLista] = useState(estadoInicial);

  const agregarElemento = () => {
    console.log("click");
    setLista([...lista, { id: 4, texto: "tarea4" }]);
  };

  return (
    <div>
      <h2>Lista</h2>
      {lista.map((item, index) => (
        <h4 key={index}>{item.texto}</h4>
      ))}
      <button onClick={() => agregarElemento()}>Agregar</button>
    </div>
  );
};

export default Lista;
