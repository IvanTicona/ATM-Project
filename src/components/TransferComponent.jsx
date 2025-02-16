/* eslint-disable react/prop-types */
import React from 'react'
import "../styles/TransferComponent.css";
import deposito from '../assets/deposit.svg';
import withDraw from '../assets/withdraw.svg';

export const TransferComponent = ({userId, amount, date, description, type}) => {
  return (
    <div className='transfer-container'>
      <div className='transfer-header'>
        <h3 className='transfer-title'>Transferencia</h3>
        {type === 'DEPOSIT' ?
          <img src={deposito} alt='icon' className='icon' />
          :
          <img src={withDraw} alt='icon' className='icon' />
        }
      </div>
      <div className='transfer-body'>
        <p className='transfer-data'>Tipo: <span>{type}</span></p>
        <p className='transfer-data'>Numero de Cuenta: <span>{userId}</span></p>
        <p className='transfer-data'>Monto: <span>{amount}</span></p>
        <p className='transfer-data'>Fecha: <span>{date}</span></p>
        <p className='transfer-data'>Descripción: <span>{description}</span></p>
      </div>
    </div>
  )
}
