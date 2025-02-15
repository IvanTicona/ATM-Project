// src/services/transactions.js
import { doc, increment, collection, addDoc, serverTimestamp, runTransaction } from 'firebase/firestore';
import { db } from './firebase'; // Asegúrate de exportar e inicializar correctamente tu instancia de Firestore


export const deposit = async (accountId, amount) => {
  const accountRef = doc(db, 'accounts', accountId);
  const transactionsRef = collection(db, 'transactions');

  try {
    await runTransaction(db, async (transaction) => {
      // Obtenemos el documento de la cuenta
      const accountDoc = await transaction.get(accountRef);
      if (!accountDoc.exists()) {
        throw new Error("La cuenta no existe.");
      }

      // Actualizamos el balance incrementándolo con el monto depositado
      transaction.update(accountRef, {
        balance: increment(amount)
      });

      // Registramos la transacción
      await addDoc(transactionsRef, {
        amount,
        date: serverTimestamp(),
        description: `Depósito de $${amount}`,
        type: 'DEPOSIT',
        userID: accountId,
      });
    });
    console.log("Depósito exitoso.");
  } catch (error) {
    console.error("Error en el depósito:", error);
    throw error;
  }
};

export const withDraw = async (accountId, amount) => {
  const accountRef = doc(db, 'accounts', accountId);
  const transactionsRef = collection(db, 'transactions');

  try {
    await runTransaction(db, async (transaction) => {
      const accountDoc = await transaction.get(accountRef);
      if (!accountDoc.exists()) {
        throw new Error("La cuenta no existe.");
      }

      const currentBalance = accountDoc.data().balance;
      if (currentBalance < amount) {
        throw new Error('Fondos insuficientes para el retiro.');
      }

      transaction.update(accountRef, {
        balance: increment(-amount)
      });

      await addDoc(transactionsRef, {
        amount,
        date: serverTimestamp(),
        description: `Retiro de $${amount}`,
        type: 'WITHDRAW',
        userID: accountId,
      });
    });
  } catch (error) {
    console.error("Error en el retiro:", error);
    throw error;
  }
};

export const transfer = async (fromAccountId, toAccountId, amount) => {
  const fromAccountRef = doc(db, 'accounts', fromAccountId);
  const toAccountRef = doc(db, 'accounts', toAccountId);
  const transactionsRef = collection(db, 'transactions');

  try {
    await runTransaction(db, async (transaction) => {
      // Obtenemos los documentos de ambas cuentas
      const fromDoc = await transaction.get(fromAccountRef);
      const toDoc = await transaction.get(toAccountRef);

      if (!fromDoc.exists() || !toDoc.exists()) {
        throw new Error("Una de las cuentas no existe.");
      }

      const currentBalance = fromDoc.data().balance;
      if (currentBalance < amount) {
        throw new Error("Fondos insuficientes para la transferencia.");
      }

      // Actualizamos el balance: restamos en la cuenta de origen y sumamos en la destino
      transaction.update(fromAccountRef, {
        balance: increment(-amount)
      });
      transaction.update(toAccountRef, {
        balance: increment(amount)
      });

      // Registramos la transacción
      await addDoc(transactionsRef, {
        type: 'transfer',
        fromAccountId,
        toAccountId,
        amount,
        timestamp: serverTimestamp()
      });
    });
    console.log("Transferencia exitosa.");
  } catch (error) {
    console.error("Error en la transferencia:", error);
    throw error;
  }
};
