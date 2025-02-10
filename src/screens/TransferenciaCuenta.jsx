import React, { useState } from 'react';  
import '../App.css'
import { useNavigate } from 'react-router';
import { Button } from '../components/common/Button';


export const TransferenciaCuenta = () => {
  let navigate = useNavigate();
  return (
    <>
    <div>Seleccione la transferencia a realizar</div>
    <Button texto='Cuentas Propias' direccion='izquierda' accion={()=> navigate('/cuentasPropias')}/>
    <Button texto='Cuentas Terceros' direccion='izquierda' accion={()=> navigate('/cuentasTerceros')}/>
    <Button texto='Cuentas de Otros Bancos' direccion='izquierda' accion={()=> navigate('/cuentasOtrosBancos')}/>
    </>
  
  )
}