import React from 'react';
import '../styles/VerEnPantalla.css'; 
import { useNavigate } from 'react-router';
import { Button } from '../components/common/Button';

export const VerEnPantalla = () => {
  let navigate = useNavigate();
  return (
    <>
      <h1 className="ver-en-pantalla-title">Extracto</h1>
      <div className="ver-en-pantalla-container">

        <p className="ver-en-pantalla-text">Últimas transacciones:</p>
        <p className="ver-en-pantalla-text">Saldos Disponibles:</p>
        <p className="ver-en-pantalla-text">Tipos de Transacción:</p>
        <p className="ver-en-pantalla-text">Fecha y Hora:</p>
        <p className="ver-en-pantalla-text">Ubicación:</p>

      </div>
      <div className="buttons-container">
        <Button texto='Otro Servicio' direccion='derecha' accion={()=> navigate('/otroServicio')} />
        <Button texto='Salir' direccion='derecha' accion={()=> navigate('/leerTarjeta')} />
      </div>
    </>
  );
};
