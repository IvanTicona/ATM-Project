import React, { useContext } from 'react'
import { useNavigate } from 'react-router';
import { KeyboardContext } from '../contexts/KeyboardContext';
import { Keyboard } from '../components/common/Keyboard';
import { accountNumber } from '../services/account';
import { ToastContainer, toast } from "react-toastify";
import { transfer } from '../services/transactionService';
import { OpcionesDeSalida } from '../components/common/OpcionesDeSalida';

export const TransferOthers = () => {
    let navigate = useNavigate();

    const { keyboardValue } = useContext(KeyboardContext)
    const undertransfer = async () => {
        try {
            const toAccountNumber = localStorage.getItem('toAccountNumber')
            const numericAmount = Number(keyboardValue)
            if (isNaN(numericAmount) || numericAmount <= 0) {
                toast.error("Por favor, ingresa un monto válido.")
                return
            }
            toast.info("Procesando transacción, por favor espere.")
            await transfer(accountNumber, toAccountNumber, numericAmount)
            localStorage.removeItem('toAccountNumber')
            navigate("/extracto")
        } catch (error) {
            console.log(error)
            toast.error("Fondos insuficientes para la transferencia.");
        }
    }

    return (
        <>
            <h3 className='title-atm'>Ingresar la cantidad a depositar en Bs. </h3>
            <div className="pin-container">
                {keyboardValue}
            </div>
            <Keyboard action={undertransfer} />
            <OpcionesDeSalida/>
            <ToastContainer/>
        </>
    )
}