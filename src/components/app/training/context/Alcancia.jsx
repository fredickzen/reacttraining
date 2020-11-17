import React, { useContext } from "react";
import { AhorrosContext } from "../../../../hooks/context/AhorrosContext";

const Alcancia = () => {
  const { dinero, dolares } = useContext(AhorrosContext);
  return (
    <div
      style={{
        backgroundColor: "#B7950B ",
      }}
    >
      Hay ahorrado ${dinero}
      <br/>
      Dolares $ {dolares}
    
    </div>
  );
};

export default Alcancia;
