import React, { useContext } from "react";
import { AhorrosContext } from "../../../../hooks/context/AhorrosContext";

const MascotaHijo = () => {
  const { dinero, setDinero, setDolares, dolares } = useContext(AhorrosContext);



  return (
    <div style={{ backgroundColor: "#17202A", padding: "10px" }}>
      <h4>Soy el perro</h4>
      <button onClick={() => setDinero(dinero + 50)}>
        Robar dinero para papi
      </button>
      <button onClick={() => setDolares(dolares + 50)}>
        Robar dolares
      </button>
    </div>
  );
};

export default MascotaHijo;
