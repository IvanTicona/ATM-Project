import React, { useState } from 'react';  
import '../App.css';
import { useNavigate } from 'react-router';
import { Button } from '../components/common/Button';
import { accountNumber } from '../services/account';
import '../styles/Tarjeta.css';


export const CuentasPropias = () => {
  let navigate = useNavigate();

  return (
    <>
      <h3>Seleccione la cuenta a la que va a transferir</h3>
      <Button texto={`Numero de cuenta: ${accountNumber}`} direccion='izquierda' accion={()=> navigate('/deposito')}/> 
    </>
  );
};