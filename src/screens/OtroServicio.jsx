import React from 'react'
import { useNavigate } from 'react-router';
import { Button } from '../components/common/Button';


export const OtroServicio = () => {
  let navigate = useNavigate();
  return (
    <>
    <div>¿Requiere otro Servicio?</div>
    <Button texto='Si' direccion='izquierda' accion={()=> navigate('/leerTarjeta')}/>
    <Button texto='No' direccion='izquierda' accion={()=> navigate('/sinTarjeta')}/>
    </>
    
  )
}