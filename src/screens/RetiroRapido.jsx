import React, { useEffect, useState } from 'react'
import { Button } from '../components/common/Button'
import { useNavigate } from "react-router"
import { accountNumber, getAccountData } from '../services/account';
import { withDraw } from '../services/transactionService';
import { toast, ToastContainer } from 'react-toastify';
import { OpcionesDeSalida } from '../components/common/OpcionesDeSalida'

export const RetiroRapido = () => {
  let navigate = useNavigate();
  const amounts = [50, 100, 200, 500]
  const [acountBalance, setAccountBalance] = useState(0);
  const handleSubmit = async (numericAmount) => {
    try {
      if (isNaN(numericAmount) || numericAmount <= 0) {
        toast.error("Por favor, ingresa un monto válido.");
        return;
      }
      toast.info("Enviada solicitud para el retiro de: " + numericAmount.toString() + " Bs.");
      await withDraw(accountNumber, numericAmount);
      toast.success("Retiro completado con éxito.")
      const timer = setTimeout(() => {
        navigate("/operaciones");
      }, 3000);
    } catch (error) {
      toast.error("Error: " + error.message);
    }
  };
  useEffect(() => {
    const fetchSaldo = async () => {
      try {
        toast.info("Por favor espere un momento")
        const { balance } = await getAccountData();
        setAccountBalance(balance);
        toast.dismiss();
      } catch (e) {
        toast.error("Error al consultar saldo");
      }
    };

    fetchSaldo();
  }, []);
  return (
    <>
      <h3 className='title-atm'>Retiro</h3>
      <h3 className="title-atm">Saldo disponible: <strong>Bs. <span id="balance">{acountBalance}</span> </strong></h3>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        height: '60%',
        justifyContent: 'space-between',
      }}>
        {
          amounts.map((amount, index) => {
            return (
              <Button key={index} texto={`Bs.${amount}`} direccion="derecha" accion={() => handleSubmit(amount)} />
            )
          })
        }
      </div>
      <Button texto="Otro monto" direccion="derecha" accion={() => navigate("/retiro")} />
      <OpcionesDeSalida />
      <ToastContainer />
    </>
  )
}