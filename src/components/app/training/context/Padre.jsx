import React, { useState } from "react";
import { AhorrosContext } from "../../../../hooks/context/AhorrosContext";
import Alcancia from "./Alcancia";
import Hija from "./Hija";
import Hijo from "./Hijo";
import Prueba from "./Prueba";

const Padre = ({ titulo }) => {
  const [dinero, setDinero] = useState(10000);
  const [dolares, setDolares] = useState(0);
  const [tipoMonedas, setTipoMonedas] = useState({
    descripcion: "Dolar",
    decimales: 2,
  });

  return (
    <div>
      <h2>{titulo}</h2>
      <button
        className="btn btn-success"
        onClick={() => setDinero(dinero + 1000)}
      >
        Trabajar
      </button>
      <AhorrosContext.Provider
        value={{ dinero, setDinero, dolares, setDolares, setTipoMonedas, tipoMonedas }}
      >
        <Alcancia />
        <div style={{ display: "flex" }}>
          <Hijo />
          <Hija />
        </div>
        <Prueba />
        <span>{JSON.stringify(tipoMonedas)}</span>
      </AhorrosContext.Provider>
    </div>
  );
};

export default Padre;
