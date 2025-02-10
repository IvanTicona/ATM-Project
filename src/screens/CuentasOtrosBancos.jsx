import React from 'react'
import '../App.css'
import { useNavigate } from 'react-router';
import { Button } from '../components/common/Button';


export const CuentasOtrosBancos = () => {
  let navigate = useNavigate();
  
  const [cuenta, setCuenta] = useState('');

  const handleChange = (e) => {
    setCuenta(e.target.value);
  };

  return (
    <>
      <div>Introduzca la cuenta hacia la que va a transferir</div>
      <div>Cuenta:</div>
      <input 
        type="text" 
        id="cuenta" 
        value={cuenta} 
        onChange={handleChange} 
        placeholder="Ingresa el número de cuenta" 
      />
      <div>Cuenta ingresada: {cuenta}</div>
      <Button texto='Correcto' direccion='izquierda' accion={()=> navigate('/ingresarMonto')}/>
      <Button texto='Incorrecto' direccion='izquierda' accion={()=> navigate('/ingresarMonto')}/>
    </>
  );
};