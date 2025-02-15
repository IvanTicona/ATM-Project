import React, { useContext } from "react";
import "../../styles/Keyboard.css";
import cancelBtn from "../../assets/cancelBtn.svg";
import checkBtn from "../../assets/checkBtn.svg";
import { KeyboardContext } from "../../contexts/KeyboardContext";
import { ToastContainer, toast } from "react-toastify";

// eslint-disable-next-line react/prop-types
export const Keyboard = ({ limit = 999999999, action = () => { }, exactLenght = false }) => {

  const teclado = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const { keyboardValue, setKeyboardValue } = useContext(KeyboardContext);

  const numberClick = (numero) => {
    if (keyboardValue.length >= limit) {
      toast.info("El número máximo de dígitos es " + limit)
      return;
    }
    setKeyboardValue((preValue) => preValue + numero);
  }

  const cancelClick = () => {
    setKeyboardValue("");
  }

  const acceptClick = () => {
    if (exactLenght && keyboardValue.length != limit) {
      toast.info("Deben introducirse " + limit + " dígitos")
    } else {
      action();
      setKeyboardValue("");
    }
  }

  return (
    <div className="keyboard">
      {teclado.map((numero) => {
        return (
          <button
            key={numero}
            className="button"
            onClick={() => numberClick(numero)}
          >
            {numero}
          </button>
        );
      })}
      <button
        className="button-cancel button"
        onClick={() => cancelClick()}
      >
        <img src={cancelBtn} alt="cancel" className="cancelImg" />
      </button>
      <button
        className="button-accept button"
        onClick={() => acceptClick()}
      >
        <img src={checkBtn} alt="accept" className="checkImg" />
      </button>
    </div>
  );
};
