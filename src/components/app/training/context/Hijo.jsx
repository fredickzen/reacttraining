import React, { useContext } from "react";
import { AhorrosContext } from "../../../../hooks/context/AhorrosContext";
import MascotaHijo from "./MascotaHijo";

const Hijo = () => {
  const { dinero, setDinero } = useContext(AhorrosContext);
  return (
    <div style={{backgroundColor: "#A93226", padding: "10px"}}>
      <h4>Soy el hijo</h4>
      <button onClick={() => setDinero(dinero - 500)}>
        Gastar dinero en drogras
      </button>
      <MascotaHijo/>
    </div>
  );
};

export default Hijo;
