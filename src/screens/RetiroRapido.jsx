import React, { useEffect, useState } from 'react'
import { Button } from '../components/common/Button'
import { useNavigate } from "react-router"
import { accountNumber, getAccountData } from '../services/account';
import { withDraw } from '../services/transactionService';
import { toast } from 'react-toastify';



export const RetiroRapido = () => {
    let navigate = useNavigate();
    const amounts =[50,100,200,500]
    const [acountBalance,setAccountBalance]=useState(0);
    const handleSubmit = async (numericAmount) => {
      try {
        if (isNaN(numericAmount) || numericAmount <= 0) {
          toast.error("Por favor, ingresa un monto válido.");
          return;
        }
        toast.info("Enviada solicitud para el retiro de: " + numericAmount.toString() + " Bs.");
        await withDraw(accountNumber, numericAmount);
        navigate("/operaciones");
      } catch (error) {
        toast.error("Error: " + error.message);
      }
    };
    useEffect(() => {
      const fetchSaldo = async () => {
        try {
          const { balance } = await getAccountData();
          setAccountBalance(balance);
        } catch (e) {
          toast.error("Error al consultar saldo");
        }
      };
  
      fetchSaldo();
    }, []);
  return (
    <>
 
        <h1 className='title-atm'>Retiro</h1>
        <p className="texto">Saldo disponible: <strong>Bs. <span id="balance">{acountBalance}</span> </strong></p>
        <div className="buttons">
            {
              amounts.map((amount,index)=>{
                return(
                  <Button key={index} texto = {`Bs.${amount}`} direccion = "derecha" accion = {()=> handleSubmit(amount)}/>
                )
              })
            }
    </div>
    <Button texto = "Otro monto" direccion = "derecha" accion = {()=> navigate("/retiro")}/>
 

    </>
  )
}