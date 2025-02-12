import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Keyboard } from "../components/Keyboard";
import { KeyboardContext } from "../contexts/KeyboardContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/Button.css";
import "../styles/Login.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../services/firebase";

export const Login = () => {
  let navigate = useNavigate();
  const { state, setState } = useContext(KeyboardContext);
  const [accounts, setAccounts] = useState([]);

  const signIn = () => {
    const foundAccount = accounts.find((account) => account.pin == state.pin);
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
  }, []);

  return (
    <>
      <div>
        <h3 className="title">Bienvenido a su propio ATM</h3>
        <h3 className="title">Ingrese su PIN:</h3>
      </div>
      <h1 className="pin-container">{state.pin}</h1>
      <button
        className="boton"
        onClick={() => signIn()}
      >
        <h3 className="texto">Ingresar</h3>
      </button>
      <ToastContainer />
      <Keyboard />
    </>
  );
};
