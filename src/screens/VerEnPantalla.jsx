import React, { useState } from 'react';
import '../styles/VerEnPantalla.css'; 
import { useNavigate } from 'react-router';
import { Button } from '../components/common/Button';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db } from '../services/firebase';
import { useEffect } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';

export const VerEnPantalla = () => {
  let navigate = useNavigate();
  let date = new Date().toLocaleString();
  
  const [balance, setBalance] = useState(null);
  const [lastTransaction, setLastTransaction] = useState("");
  const [owner, setOwner] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const account = localStorage.getItem('account');
        setBalance(localStorage.getItem('balance'));
        setOwner(localStorage.getItem('owner'));

        const q = query(collection(db, "accounts"), where("accountNumber", "==", Number(account)));
        const querySnapshot = await getDocs(q);
    
        const registers = [];


        querySnapshot.forEach((doc) => {
          registers.push({lastTransaction : doc.data().lastTransaction});
        });
        const formatDate = new Date(registers[0].lastTransaction.seconds * 1000);
        setLastTransaction(formatDate.toLocaleString());
      } else {
        setOwner(null);
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      <h1 className="ver-en-pantalla-title">Extracto</h1>
      <div className="ver-en-pantalla-container">

        <p className="ver-en-pantalla-text">Propietario de la cuenta:{owner.replace(/['"]+/g, '')}</p>
        <p className="ver-en-pantalla-text">Última transaccion:{lastTransaction}</p>
        <p className="ver-en-pantalla-text">Saldos Disponibles:{balance}</p>
        <p className="ver-en-pantalla-text">Tipos de Transacción:{"WITHDRAW, DEPOSIT"}</p>
        <p className="ver-en-pantalla-text">Fecha y Hora: {date}</p>
        <p className="ver-en-pantalla-text">Ubicación:</p>

      </div>
      <div className="buttons-container">
        <Button texto='Otro Servicio' direccion='derecha' accion={()=> navigate('/otroServicio')} />
        <Button texto='Salir' direccion='derecha' accion={()=> navigate('/leerTarjeta')} />
      </div>
    </>
  );
};
