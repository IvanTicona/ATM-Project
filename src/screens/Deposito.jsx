import React, { useContext } from 'react'
import { Keyboard } from '../components/common/Keyboard'
import { KeyboardContext } from '../contexts/KeyboardContext'
import { deposit } from '../services/transactionService'
import { useNavigate } from 'react-router'
import { accountNumber } from '../services/account'
import { ToastContainer, toast } from "react-toastify";
import { OpcionesDeSalida } from '../components/common/OpcionesDeSalida'

export const Deposito = () => {
  let navigate = useNavigate();

  const { keyboardValue } = useContext(KeyboardContext)
  const under_deposit = async () => {
    try {
      const numericAmount = Number(keyboardValue)
      if (isNaN(numericAmount) || numericAmount <= 0) {
        toast.error("Por favor, ingresa un monto válido.")
        return
      }
      toast.info("Procesando depósito, espere un momento por favor.")
      await deposit(accountNumber, numericAmount)
      navigate("/extracto")
    } catch {
      toast.error("Error, intente de nuevo más tarde.")
    }
  }

  return (
    <>
      <h3 className='title-atm'>Ingresar la cantidad a depositar en Bs. </h3>
      <div className = "pin-container">
        {keyboardValue}
      </div>
      <Keyboard action={under_deposit} />  
      <OpcionesDeSalida/>
      <ToastContainer />
    </>
  )
}