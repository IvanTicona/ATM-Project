/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import { collection, getDocs } from "firebase/firestore";
import { Keyboard } from "../components/common/Keyboard";
import { KeyboardContext } from "../contexts/KeyboardContext";
import { db } from "../services/firebase";
import "react-toastify/dist/ReactToastify.css";
import "../styles/Login.css";

export const Login = () => {
  let navigate = useNavigate();
  const { keyboardValue } = useContext(KeyboardContext);
  const [accounts, setAccounts] = useState([]);

  const signIn = () => {
    const foundAccount = accounts.find((account) => account.pin == keyboardValue);
    if (foundAccount) {
      localStorage.setItem("account", JSON.stringify(foundAccount.accountNumber));
      localStorage.setItem("balance", JSON.stringify(foundAccount.balance));
      localStorage.setItem("owner", JSON.stringify(foundAccount.owner));

      navigate("/operaciones");
    } else {
      toast.error("PIN incorrecto. Por favor, intente de nuevo.");
    }
  };

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const accountsCollectionRef = collection(db, "accounts");
        const querySnapshot = await getDocs(accountsCollectionRef);

        const accountsList = querySnapshot.docs.map((doc) => ({
          pin: doc.id,
          ...doc.data(),
        }));

        setAccounts(accountsList);
      } catch (e) {
        toast.error("Error al obtener las cuentas");
      }
    };

    fetchAccounts();
    setState(prevState => ({
      ...prevState,
      pin: "0000",
    }));
  }, []);

  return (
    <>
      <h3 className="title-atm">Bienvenido a su propio ATM</h3>
      <h3 className="title-atm">Ingrese su PIN</h3>
      <h3 className="pin-container">{keyboardValue}</h3>
      <ToastContainer />
      <Keyboard limit={4} action={signIn} />
    </>
  );
};
