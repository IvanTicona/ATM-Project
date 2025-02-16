import React from 'react';
import { useNavigate } from 'react-router'; 
import { Button } from '../components/common/Button';
import '../styles/Extracto.css'; 

export const Extracto = () => {
  let navigate = useNavigate();
  return (
    <div className='extractos-container'>
      <h3 className='title-atm'>Extracto</h3>
      <div className="buttons-container">
        <Button texto="Ver en Pantalla" direccion="derecha" accion={() => navigate('/ver-en-pantalla')} />
        <Button texto="Imprimir" direccion="derecha" accion={() => navigate('/imprimir')} />
      </div>
    </div>
  );
};