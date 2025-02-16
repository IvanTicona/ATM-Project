import React, { useContext } from 'react'
import { useNavigate } from 'react-router';
import { KeyboardContext } from '../contexts/KeyboardContext';
import { Keyboard } from '../components/common/Keyboard';
import { accountNumber } from '../services/account';
import { transfer } from '../services/transactionService';

export const TransferOthers = () => {
    let navigate = useNavigate();

    const { keyboardValue } = useContext(KeyboardContext)
    const undertransfer = async () => {
        try {
            const toAccountNumber = localStorage.getItem('toAccountNumber')
            const numericAmount = Number(keyboardValue)
            if (isNaN(numericAmount) || numericAmount <= 0) {
                console.log("Por favor, ingresa un monto válido.")
                return
            }
            await transfer(accountNumber, toAccountNumber, numericAmount)
            localStorage.removeItem('toAccountNumber')
            navigate("/extracto")
        } catch (error) {
            console.log("Error")
        }
    }

    return (
        <>
        <h3 className='title-atm'>Ingresar la cantidad a depositar en Bs. </h3>
        <div className = "pin-container">
            {keyboardValue}
        </div>
        <Keyboard action={undertransfer} />  
        </>
    )
}