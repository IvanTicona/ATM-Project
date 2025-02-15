import '../styles/VerEnPantalla.css'; 
import { useNavigate } from 'react-router';
import { Button } from '../components/common/Button';
import { useEffect, useState } from 'react';

export const VerEnPantalla = () => {
  let navigate = useNavigate();

  const [account, setAccount] = useState({});
  const date = new Date().toLocaleString();


  useEffect(() => {

    const account = JSON.parse(localStorage.getItem('account'));
    const balance = JSON.parse(localStorage.getItem('balance'));
    const owner = JSON.parse(localStorage.getItem('owner'));

    setAccount({
      accountNumber: account,
      balance: balance,
      owner: owner
    });

  }, []);

  return (
    <>
      <h3 className="title-atm">Extracto</h3>

      <div className="ver-en-pantalla-container">

        <p className="ver-en-pantalla-text">Última transaccion: {account.accountNumber}</p>
        <p className="ver-en-pantalla-text">Saldo Disponible: {account.balance}</p>
        <p className="ver-en-pantalla-text">Tipos de Transacción: {"DEPOSITO, RETIRO"}</p>
        <p className="ver-en-pantalla-text">Fecha y Hora: {date}</p>
        <p className="ver-en-pantalla-text">Propietario: {account.owner}</p>

      </div>

      <div className="buttons-container">
        <Button texto='Otro servicio' direccion='derecha' accion={()=> navigate('/otroServicio')} />
        <Button texto='Salir' direccion='derecha' accion={()=> navigate('/leerTarjeta')} />
      </div>
    </>
  );
};
