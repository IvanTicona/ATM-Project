import React, { useContext } from 'react'
import { useNavigate } from 'react-router';
import { deposit } from '../services/transactionService';
import { accountNumber } from '../services/account';
import { Keyboard } from '../components/common/Keyboard';
import { KeyboardContext } from '../contexts/KeyboardContext';
import { TransferOthers } from './TransferOthers';

export const IngresarCuenta = () => {
  let navigate = useNavigate();

  const { keyboardValue } = useContext(KeyboardContext)
  const under_deposit = () => {
    if(keyboardValue.length < 10){
        console.log("Por favor, ingresa un numero de cuenta válido.")
        return
    } 
    const toAccountNumber = Number(keyboardValue)
    if (isNaN(toAccountNumber) || toAccountNumber <= 0) {
        console.log("Por favor, ingresa un numero de cuenta válido.")
        return
    }
    localStorage.setItem('toAccountNumber', keyboardValue)
    navigate("/cuentas-terceros")
  }

  return (
    <>
    <h3 className='title-atm'>Ingrese el numero de cuenta del destinatario </h3>
    <div className = "pin-container">
        {keyboardValue}
      </div>
      <Keyboard action={under_deposit} />  
    </>
  )
}
