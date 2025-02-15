import { useContext, useEffect, useState } from "react";
import { Keyboard } from "../components/common/Keyboard"
import { KeyboardContext } from "../contexts/KeyboardContext";
import "../styles/Retiro.css";
import { toast, ToastContainer } from "react-toastify";
import { withDraw } from "../services/transactionService";
import { getAccountData } from "../services/account";
import { useNavigate } from "react-router";

export const Retiro = () => {

  const { keyboardValue, setKeyboardValue } = useContext(KeyboardContext);
  const [accountData, setAccountData] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const numericAmount = Number(keyboardValue);
      if (isNaN(numericAmount) || numericAmount <= 0) {
        toast.error("Por favor, ingresa un monto válido.");
        return;
      }
      await withDraw(accountData.accountNumber, numericAmount);
      setKeyboardValue("");
      // toast.info("Depósito realizado con éxito.");
      navigate("/operaciones");
    } catch (error) {
      toast.error("Error: " + error.message);
      setKeyboardValue("");
    }
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await getAccountData();
        setAccountData(data);
      } catch (error) {
        console.error("Error al obtener la cuenta del usuario:", error);
      }
    };
    fetchUserData();
  }, []);

  return (
    <>
      <h3 className="title-atm">INGRESE EL MONTO QUE DESEA RETIRAR:</h3>
      <h3 className="amount">{ keyboardValue }</h3>
      <ToastContainer />
      <Keyboard action={handleSubmit}/>
    </>
  )
}
