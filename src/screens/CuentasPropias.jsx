import React, { useState } from 'react';  
import '../App.css';
import { useNavigate } from 'react-router';
import { Button } from '../components/common/Button';
import { accountNumber } from '../services/account';
import '../styles/CuentasPropias.css';


export const CuentasPropias = () => {
  let navigate = useNavigate();

  return (
    <>
    <h3 className='title-atm'>Seleccione la cuenta a la que va a transferir</h3>
    <div className="cuentas">
      <Button texto={`Numero de cuenta: ${accountNumber}`} direccion='izquierda' accion={()=> navigate('/deposito')}/> 
    </div>
    </>
  );
};