import React, { useContext } from "react";
import { AhorrosContext } from "../../../../hooks/context/AhorrosContext";

const Prueba = () => {
  const { dinero, tipoMonedas, setTipoMonedas } = useContext(AhorrosContext);

  const modificarTipoMoneda = (isDolar) => {
    setTipoMonedas({
      ...tipoMonedas,
      isDolar: isDolar,
    });
  };
  return (
    <div>
      {dinero}
      <button onClick={() => modificarTipoMoneda(true)}>Modificar true</button>

      <button onClick={() => modificarTipoMoneda(false)}>Modificar false</button>
    </div>
  );
};

export default Prueba;
