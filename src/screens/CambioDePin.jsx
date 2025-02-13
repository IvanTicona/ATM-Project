import React, { useState, useContext } from 'react';
import { KeyboardContext } from '../contexts/KeyboardContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/Keyboard.css'

const teclado = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

export const CambioDePin = () => {
    const [newPin, setNewPin] = useState(0);
    const { setState } = useContext(KeyboardContext);
    const [digit, setDigit] = useState(3);

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
          <>
          <h2>INGRESAR NUEVO PIN</h2>
            <div className='keyboard'>
                <p className='titlePin'>‎{newPin.toString().slice(0,3-digit)}</p>
                {
                    teclado.map((numero) => {
                        return (
                            <button className='button'key={numero} onClick={() => {
                                if (digit >= 0) {
                                    setNewPin(newPin + numero * Math.pow(10, digit));
                                    setDigit(digit - 1);
                                } else {
                                    toast("No se pueden introducir más de 4 dígitos.")
                                }
                            }}>
                                {numero}
                            </button>
                        );
                    })
                }
                <button className='button-cancel' onClick={()=>{setNewPin(0);setDigit(3)}}>
                X
                </button>
                <button className='button-accept' onClick={()=>{setNewPin(0);setDigit(3);handleButtonClick()}}>
                ✔
                </button>
            </div>
        </>
            <ToastContainer />
        </>
    );
};
