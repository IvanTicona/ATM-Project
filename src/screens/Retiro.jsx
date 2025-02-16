import { useContext } from "react";
import { Keyboard } from "../components/common/Keyboard"
import { KeyboardContext } from "../contexts/KeyboardContext";
import "../styles/Retiro.css";
import { ToastContainer, toast } from "react-toastify";
import { withDraw } from "../services/transactionService";
import { accountNumber } from "../services/account";
import { useNavigate } from "react-router";
import { OpcionesDeSalida } from '../components/common/OpcionesDeSalida'

export const Retiro = () => {

  const { keyboardValue, setKeyboardValue } = useContext(KeyboardContext);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const numericAmount = Number(keyboardValue);
      if (isNaN(numericAmount) || numericAmount <= 0) {
        toast.error("Por favor, ingresa un monto válido.");
        return;
      }
      toast.info("Enviada solicitud para el retiro de: " + keyboardValue + " Bs.");
      await withDraw(accountNumber, numericAmount);
      toast.success("Retiro completado con éxito.")
      const timer = setTimeout(() => {
        navigate("/operaciones");
      }, 3000);
    } catch (error) {
      toast.error("Error: " + error.message);
      setKeyboardValue("");
    }
  };

  return (
    <>
      <h3 className="title-atm">INGRESE EL MONTO QUE DESEA RETIRAR:</h3>
      <h3 className="amount">{keyboardValue}</h3>
      <Keyboard action={handleSubmit} />
      <OpcionesDeSalida/>
      <ToastContainer />
    </>
  )
}
