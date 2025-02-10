import { db } from './firebase.js';
import { doc, runTransaction, collection, addDoc, query, where, orderBy, limit } from "firebase/firestore";

export const TransactionService = {
  async deposit(userId, amount) {
    const accountRef = doc(db, "accounts", userId);
    
    await runTransaction(db, async (transaction) => {
      const account = await transaction.get(accountRef);
      const newBalance = account.data().balance + amount;
      
      transaction.update(accountRef, {
        balance: newBalance,
        lastTransaction: new Date()
      });
      
      await this._createTransaction(userId, 'DEPOSIT', amount);
    });
  },

  async withdraw(userId, amount) {
    const accountRef = doc(db, "accounts", userId);
    
    await runTransaction(db, async (transaction) => {
      const account = await transaction.get(accountRef);
      const currentBalance = account.data().balance;
      
      if (currentBalance < amount) {
        throw new Error("Fondos insuficientes");
      }
      
      transaction.update(accountRef, {
        balance: currentBalance - amount,
        lastTransaction: new Date()
      });
      
      await this._createTransaction(userId, 'WITHDRAW', amount);
    });
  },

  async transfer(senderId, receiverEmail, amount) {
    // Implementación similar verificando existencia del receptor
    // Usar runTransaction para operación atómica
  },

  async getTransactions(userId, limitCount = 5) {
    const q = query(
      collection(db, "transactions"),
      where("userId", "==", userId),
      orderBy("date", "desc"),
      limit(limitCount)
    );

    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  },

  async _createTransaction(userId, type, amount) {
    const transactionData = {
      userId: userId,
      type: type,
      amount: amount,
      date: new Date(),
      description: `${type} de $${amount}`
    };

    await addDoc(collection(db, "transactions"), transactionData);
  }
};