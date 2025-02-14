// src/components/Dashboard.js
import { useEffect, useState } from 'react';
import { auth, db } from '../services/firebase';
import { onAuthStateChanged } from 'firebase/auth/web-extension';
import { collection, query, where, getDocs } from 'firebase/firestore';

export const Dashboard = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [account, setAccount] = useState(null);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Observa el estado de autenticación
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setCurrentUser(user);
        
        // Obtener el accountNumber desde localStorage
        const accountNumber = localStorage.getItem('account');

        // Consulta las transacciones del usuario en la colección 'transactions'
        const q = query(
          collection(db, 'transactions'),
          where('userID', '==', Number(accountNumber))
        );

        const querySnapshot = await getDocs(q);
        const txs = [];
        querySnapshot.forEach((doc) => {
          console.log(doc.id);
          txs.push({ id: doc.id, ...doc.data() });
        });
        setTransactions(txs);
      } else {
        setCurrentUser(null);
        setProfile(null);
        setAccount(null);
        setTransactions([]);
        // Usuario no autenticado
      }
    });

    return () => unsubscribe();
  }, []);

  if (!currentUser) {
    return <p>No hay usuario autenticado. Por favor, inicia sesión.</p>;
  }

  return (
    <div>
      <h2>Bienvenido, {profile ? profile.name : 'Usuario'}</h2>
      {account && (
        <div>
          <h3>Cuenta</h3>
          <p>Balance: ${account.balance}</p>
          <p>Última Transacción: {account.lastTransaction?.toDate().toString()}</p>
        </div>
      )}
      <div>
        <h3>Transacciones</h3>
        {transactions.length > 0 ? (
          <ul>
            {transactions.map((tx) => (
              <li key={tx.id}>
                {tx.description} - {tx.date?.toDate().toString()}
              </li>
            ))}
          </ul>
        ) : (
          <p>No hay transacciones.</p>
        )}
      </div>
    </div>
  );
}
