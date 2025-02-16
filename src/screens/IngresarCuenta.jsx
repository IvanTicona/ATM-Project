import React, { useContext } from 'react'
import { useNavigate } from 'react-router';
import { deposit } from '../services/transactionService';
import { accountNumber } from '../services/account';
import { Keyboard } from '../components/common/Keyboard';
import { KeyboardContext } from '../contexts/KeyboardContext';
import { TransferOthers } from './TransferOthers';
import { ToastContainer, toast } from "react-toastify";
import { OpcionesDeSalida } from '../components/common/OpcionesDeSalida';

export const IngresarCuenta = () => {
  let navigate = useNavigate();

  const { keyboardValue } = useContext(KeyboardContext)
  const under_deposit = () => {
    const toAccountNumber = Number(keyboardValue)
    if (isNaN(toAccountNumber) || toAccountNumber <= 0) {
      toast.error("Por favor, ingrese un número de cuenta válido.")
      return
    }
    localStorage.setItem('toAccountNumber', keyboardValue)
    navigate("/cuentas-terceros")
  }

  return (
    <>
      <h3 className='title-atm'>Ingrese el numero de cuenta del destinatario </h3>
      <div className="pin-container">
        {keyboardValue}
      </div>
      <Keyboard limit={10} action={under_deposit} exactLenght={true} />
      <OpcionesDeSalida />
      <ToastContainer />
    </>
  )
}
