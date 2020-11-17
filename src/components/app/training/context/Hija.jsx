import React, { useContext } from "react";
import { AhorrosContext } from "../../../../hooks/context/AhorrosContext";
const Hija = () => {
  const { dinero, setDinero } = useContext(AhorrosContext);
  return (
    <div style={{ backgroundColor: "#76448A", padding: "10px" }}>
      <h4>Soy la hija</h4>
      <button onClick={() => setDinero(dinero - 1000)}>
        Gastar dinero en universidad
      </button>
    </div>
  );
};

export default Hija;
