import React from 'react';
import { useNavigate } from 'react-router';
import { Button } from '../components/common/Button';
import '../styles/OtroServicio.css'; 

export const OtroServicio = () => {
  let navigate = useNavigate();

  return (
    <div className="contenedor">
      <h1 className = "text">¿Requiere otro Servicio?</h1>
      <div className="botones">
        <Button texto="Si" direccion="izquierda" accion={() => navigate('/operaciones')} />
        <Button texto="No" direccion="izquierda" accion={() => navigate('/sin-tarjeta')} />
      </div>
    </div>
  );
};
