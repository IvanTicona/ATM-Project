/* eslint-disable no-unused-vars */
import React, { useState, useContext, useEffect } from "react";
import { Keyboard } from "../components/common/Keyboard";
import { KeyboardContext } from "../contexts/KeyboardContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/Keyboard.css";
import "../styles/Login.css";
import { getAccountData, updateAccountData } from "../services/account";
import { OpcionesDeSalida } from '../components/common/OpcionesDeSalida'

export const CambioDePin = () => {

  const [accountData, setAccountData] = useState({});
  const { keyboardValue } = useContext(KeyboardContext);

  const confirmarNuevoPIN = async () => {
    if (keyboardValue.length < 4) {
      toast.error("El PIN debe tener 4 dígitos");
      return;
    } else if (Number(keyboardValue) === accountData.pin) {
      toast.error("El nuevo PIN no puede ser igual al anterior");
      return;
    }
    const newData = { ...accountData, pin: Number(keyboardValue) };
    try {
      await updateAccountData(newData);
      toast.success("PIN actualizado correctamente");
    } catch (e) {
      console.log(e)
      toast.error("Error al actualizar PIN");
    }
  };

  useEffect(() => {
    const fetchAccountData = async () => {
      try {
        const data = await getAccountData();
        setAccountData(data);
      } catch (e) {
        toast.error("Error al obtener datos de la cuenta");
      }
    };
    fetchAccountData();
  }, []);

  return (
    <>
      <h3 className="title-atm">INGRESE SU NUEVO PIN:</h3>
      <h3 className="pin-container">{keyboardValue}</h3>
      <Keyboard limit={4} action={confirmarNuevoPIN} exactLenght={true} />
      <OpcionesDeSalida/>
      <ToastContainer />
    </>
  );
};
