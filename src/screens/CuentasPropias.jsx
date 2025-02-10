import React, { useState } from 'react';  
import '../App.css';
import { useNavigate } from 'react-router';
import { Button } from '../components/common/Button';


export const CuentasPropias = () => {
  let navigate = useNavigate();

  return (
    <>
      <div>Seleccione la cuenta a la que va a transferir</div>
        <button>Cuenta 1:</button>
        <button>Cuenta 2:</button>
        <button>Cuenta 3:</button>
        <button>Cuenta 4:</button>
        <button>Cuenta 5:</button>
    </>
  );
};