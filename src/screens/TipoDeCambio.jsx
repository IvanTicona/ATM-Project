import React from 'react'
import "../styles/Operaciones.css";
import { OpcionesDeSalida } from '../components/common/OpcionesDeSalida'
import '../styles/Cambio.css'
import { CambioComponent } from '../components/CambioComponent'


export const TipoDeCambio = () => {
  return (
    <>
      <div>
        <h3 className="title-atm">Tipo de Cambio</h3>
        <CambioComponent divisa="Dólar" compra={6.95} venta={6.97}/>
        <CambioComponent divisa="Sol" compra={1.85} venta={1.86}/>
      </div>
      <OpcionesDeSalida />
    </>
  );
};
