import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router'; 
import { Button } from '../components/common/Button';
import '../styles/Extracto.css'; 
import '../styles//Imprimir.css';
import { getAccountData } from '../services/account';
import html2canvas from 'html2canvas';

export const Extracto = () => {
  let navigate = useNavigate();
  const date = new Date().toLocaleString();
  const [account, setAccount] = useState({
    balance: 0,
    lastTransaction: date,
    owner: "Usuario",
    date,
  });

  const printRef = useRef();

  useEffect(() => {
    const fetchAccountData = async () => {
      try {
        const data = await getAccountData();
        setAccount({
          ...data,
          date,
          lastTransaction: data.lastTransaction.toDate().toLocaleString()
        });
      } catch (e) {
        console.error("Error al consultar saldo");
      }
    };
    fetchAccountData();
  }, []);

  const handleDownload = async () => {
    if (printRef.current) {
      const canvas = await html2canvas(printRef.current);
      const imgData = canvas.toDataURL('image/png');
      
      // Crear un enlace para descargar la imagen
      const link = document.createElement('a');
      link.href = imgData;
      link.download = 'extracto.png';  // Nombre del archivo que se descargará
      link.click();

      navigate('/otro-servicio');
    }
  };
  return (
    <div className='extractos-container'>
      <h3 className='title-atm'>Extracto</h3>
      <div className="buttons-container">
        <Button texto="Ver en Pantalla" direccion="derecha" accion={() => navigate('/ver-en-pantalla')} />
        <Button texto="Imprimir" direccion="derecha" accion={handleDownload} />
        {/* Contenido a capturar en la imagen */}
        <div className="imprimir-container" ref={printRef}>
          <p className="imprimir-text">Última transacción: <span>{account.lastTransaction}</span></p>
          <span className='divider'></span>
          <p className="imprimir-text">Saldo Disponible: <span>Bs.{account.balance}</span></p>
          <span className='divider'></span>
          <p className="imprimir-text">Tipos de Transacción: <span>{"DEPOSITO, RETIRO"}</span></p>
          <span className='divider'></span>
          <p className="imprimir-text">Fecha y Hora: <span>{account.date}</span></p>
          <span className='divider'></span>
          <p className="imprimir-text">Propietario: <span>{account.owner}</span></p>
        </div>
      </div>
    </div>
  );
};