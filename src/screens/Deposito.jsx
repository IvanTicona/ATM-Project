import React, { useContext } from 'react'
import { Keyboard } from '../components/common/Keyboard'
import { KeyboardContext } from '../contexts/KeyboardContext'
import { deposit } from '../services/transactionService'
import { useNavigate } from 'react-router'
import { accountNumber } from '../services/account'

export const Deposito = () => {
  let navigate = useNavigate();

  const { keyboardValue } = useContext(KeyboardContext)
  const under_deposit = async () => {
    try {
      const numericAmount = Number(keyboardValue)
      if (isNaN(numericAmount) || numericAmount <= 0) {
        console.log("Por favor, ingresa un monto válido.")
        return
      }
      await deposit(accountNumber, numericAmount)
      navigate("/extracto")
    } catch {
      console.log("Error")
    }
  }

  return (
    <>
      <h3 className='title-atm'>Ingresar la cantidad a depositar en Bs. </h3>
      <div className = "pin-container">
        {keyboardValue}
      </div>
      <Keyboard action={under_deposit} />  
    </>
  )
}