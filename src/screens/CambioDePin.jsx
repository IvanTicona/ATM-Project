import React, { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom"; // 🔹 Importar useNavigate
import { KeyboardContext } from '../contexts/KeyboardContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/Keyboard.css';
import { Keyboard } from '../components/Keyboard';


export const CambioDePin = () => {
    const [newPin, setNewPin] = useState(""); // 🔹 Cambiado a string
    const { setState } = useContext(KeyboardContext);
    const [digit, setDigit] = useState(3);
    const navigate = useNavigate(); // 🔹 Definir navigate

    const notify = (message) => {
        toast(message, {
            autoClose: 5000,
            closeOnClick: true,
            progress: undefined,
        });
    };

    const confirmarNuevoPIN = () => {
        if (newPin === "1234") {
            notify("Por favor, ingrese un PIN distinto al actual.");
        } else if (newPin.length < 4) {
            notify("El PIN debe tener 4 dígitos.");
        } else {
            notify("Nuevo PIN registrado.");
            setState(prevState => ({ ...prevState, pin: newPin }));
            navigate("/operaciones");
        }
    };

    return (
        <>
            <h2>INGRESAR NUEVO PIN</h2>
            <Keyboard
            limit = {4}
            
            />
            <ToastContainer />
        </>
    );
};
