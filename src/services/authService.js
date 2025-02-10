import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "./firebase.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";


export const AuthService = {
  async register(email, password, name) {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    
    await setDoc(doc(db, "users", userCredential.user.uid), {
      name: name,
      email: email,
      createdAt: new Date()
    });

    await setDoc(doc(db, "accounts", userCredential.user.uid), {
      balance: 1000.00,
      lastTransaction: null
    });

    return userCredential;
  },

  login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  },

  logout() {
    return signOut(auth);
  }
};