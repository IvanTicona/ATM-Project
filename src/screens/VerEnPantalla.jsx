/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import '../styles/VerEnPantalla.css'; 
import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import { getAccountData } from '../services/account';
import { OpcionesDeSalida } from '../components/common/OpcionesDeSalida';


export const VerEnPantalla = () => {

  let navigate = useNavigate();
  const date = new Date().toLocaleString();
  const [account, setAccount] = useState({
    balance: 0,
    lastTransaction: date,
    owner: "Usuario",
    date,
  });

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

  return (
    <>
      <h3 className="title-atm">Extracto</h3>

      <div className="ver-en-pantalla-container">

        <p className="ver-en-pantalla-text">Última transaccion: <span>{account.lastTransaction}</span></p>
        <span className='divider'></span>
        <p className="ver-en-pantalla-text">Saldo Disponible: <span>Bs.{account.balance}</span></p>
        <span className='divider'></span>
        <p className="ver-en-pantalla-text">Tipos de Transacción: <span>{"DEPOSITO, RETIRO"}</span></p>
        <span className='divider'></span>
        <p className="ver-en-pantalla-text">Fecha y Hora: <span>{account.date}</span></p>
        <span className='divider'></span>
        <p className="ver-en-pantalla-text">Propietario: <span>{account.owner}</span> </p>

      </div>

      <OpcionesDeSalida/>      
    </>
  );
};
