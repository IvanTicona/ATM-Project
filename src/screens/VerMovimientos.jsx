import React, { useEffect, useState } from 'react'
import { TransferComponent } from '../components/TransferComponent'
import { getTransactions } from '../services/account'
import { toast, ToastContainer } from 'react-toastify';
import '../styles/VerMovimientos.css'
import { OpcionesDeSalida } from '../components/common/OpcionesDeSalida'

export const VerMovimientos = () => {

  const [transfers, setTransfers] = useState([]);

  useEffect(()=>{
    const fetchAccountData = async () => {
      try {
        toast.info("Por favor espere un momento")
        const transfers = await getTransactions();
        setTransfers(transfers);
        toast.dismiss();
      } catch (error) {
        console.error(error);
      }
    }
    fetchAccountData();
  },[])

  return (
    <>
      <h3 className='title-atm'>Ver Movimientos</h3>
      <div className='container-transfers'>
      {
        transfers.map(({userID, amount, type, date, description}, index) => (
          <TransferComponent
          amount={amount}
          userId={userID}
          key={index}
          type={type}
          date={date.toDate().toLocaleDateString()}
          description={description}
          />
        ))
      }
      </div>
      <OpcionesDeSalida/>
      <ToastContainer/>
    </>
  )
}
