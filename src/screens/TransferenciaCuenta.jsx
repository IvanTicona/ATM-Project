import React, { useState } from 'react';
import '../App.css'
import { useNavigate } from 'react-router';
import { Button } from '../components/common/Button';
import '../styles/TransferenciaCuenta.css';
import { OpcionesDeSalida } from '../components/common/OpcionesDeSalida';


export const TransferenciaCuenta = () => {
  let navigate = useNavigate();
  return (
    <>
      <h3 className='title-atm'>Seleccione la transferencia a realizar</h3>

      <div className='cuentas'>
        <Button texto='Cuentas Propias' direccion='izquierda' accion={() => navigate('/cuentas-propias')} />
        <Button texto='Cuentas Terceros' direccion='izquierda' accion={() => navigate('/ingresar-cuenta')} />
      </div>
      <OpcionesDeSalida />
    </>
  )
}