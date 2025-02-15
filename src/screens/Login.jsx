import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import { Keyboard } from "../components/common/Keyboard";
import { KeyboardContext } from "../contexts/KeyboardContext";
import "react-toastify/dist/ReactToastify.css";
import "../styles/Login.css";
import { getAccountData } from "../services/account";

export const Login = () => {
  let navigate = useNavigate();
  const { keyboardValue } = useContext(KeyboardContext);
  const [account, setAccount] = useState({});

  const signIn = () => {
    if (account.pin === Number(keyboardValue)) {
      navigate("/operaciones");
    } else {
      toast.error("PIN incorrecto. Por favor, intente de nuevo.");
    }
  };

  useEffect(() => {
    const getAccount = async () => {
      const data = await getAccountData();
      setAccount(data);
    };
    getAccount();
  }, []);

  return (
    <>
      <h3 className="title-atm">Bienvenido a su propio ATM</h3>
      <h3 className="title-atm">Ingrese su PIN</h3>
      <h3 className="pin-container">{keyboardValue}</h3>

      <Keyboard limit={4} action={signIn} />
      <ToastContainer />
    </>
  );
};
