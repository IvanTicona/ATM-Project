import React, { useState, useContext } from 'react';
import { Keyboard } from "../components/common/Keyboard";
import { KeyboardContext } from "../contexts/KeyboardContext";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import '../styles/Keyboard.css'
import "../styles/Login.css";

export const CambioDePin = () => {
    const [newPin, setNewPin] = useState(0);
    const { setState } = useContext(KeyboardContext);
    const { keyboardValue } = useContext(KeyboardContext);

    const notify = (message) => {
        toast(message, {
            autoClose: 5000,
            closeOnClick: true,
            progress: undefined,
        });
    };

    // Implementar correctamente esta función
    const confirmarNuevoPIN = () => {
        if (newPin === "1234") {
            toast.error("Por favor, ingrese un PIN distinto al actual.");
        } else {
            // Hacer el cambio del pin sobre la BD
            toast.success("Nuevo PIN registrado.");
            setState(prevState => ({ ...prevState, pin: newPin }));
            navigate("/operaciones");
        }
    };

    return (
        <>
            <h3 className='title-atm'>INGRESE SU NUEVO PIN:</h3>
            <h3 className="pin-container">{keyboardValue}</h3>
            <Keyboard limit={4} action={confirmarNuevoPIN} exactLenght={true} />
            <ToastContainer />
        </>
    );
};
