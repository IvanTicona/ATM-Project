import React from 'react'
import "../styles/TransferComponent.css";

export const TransferComponent = ({userId, amount, date, description, type}) => {
  return (
    <div className='transfer-container'>
    <h3>Transferencia</h3>
    <p>Tipo: {type}</p>
    <p>Numero de Cuenta: {userId}</p>
    <p>Monto: {amount}</p>
    <p>Fecha: {date}</p>
    <p>Descripción: {description}</p>
    </div>
  )
}
