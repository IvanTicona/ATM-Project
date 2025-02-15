import { useContext } from "react";
import { Keyboard } from "../components/common/Keyboard"
import { KeyboardContext } from "../contexts/KeyboardContext";
import "../styles/Retiro.css";

export const Retiro = () => {

  const { keyboardValue } = useContext(KeyboardContext);

  return (
    <>
      <h3 className="title-atm">Ingrese el monto que desea retirar:</h3>
      <h3 className="amount">{ keyboardValue }</h3>
      <Keyboard />
    </>
  )
}
