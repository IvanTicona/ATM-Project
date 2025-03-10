import { collection, doc, getDoc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { db } from "./firebase";

// Cuentas
// Dorian
// export const accountNumber = "8989075467";
// Leonardo
export const accountNumber = "9240011123";
// Mazen
// export const accountNumber = "2283488292";
// Daniel
// export const accountNumber = "2099122830";
// Pinky
// export const accountNumber = "0281328281";

export const getAccountData = async () => {
  // Obtener la cuenta de la base de datos con el número de cuenta
  const docRef = doc(db, "accounts", accountNumber);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    throw new Error("No se encontró la cuenta");
  }
}

export const getTransactions = async () => {
  // Obtener las transacciones de la base de datos con el número de cuenta
  const q = query(collection(db, "transactions"), where("userID", "==", accountNumber));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => doc.data());
}

export const updateAccountData = async (newData) => {
  // Actualizar la cuenta en la base de datos
  const docRef = doc(db, "accounts", accountNumber);
  try {
    await updateDoc(docRef, newData);
  } catch {
    throw new Error("Error al actualizar la cuenta");
  }
}

export const validateAccount = async (toAccountNumber) => {
  // Validar que la cuenta de destino exista
  const q = query(collection(db, "accounts"));
  const querySnapshot = await getDocs(q);
  const accounts = querySnapshot.docs.map(doc => doc.id);
  return accounts.includes(toAccountNumber);
}