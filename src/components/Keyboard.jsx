import React, { useState, useContext } from 'react';
import { KeyboardContext } from '../contexts/KeyboardContext'; // Asegúrate de importar el contexto
import '../styles/Keyboard.css'

export const Keyboard = () => {
    const teclado = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const [pin, setPin] = useState(0);
    const [digit, setDigit] = useState(3);
    const { setState } = useContext(KeyboardContext); // Obtener setState del contexto

    const handleButtonClick = () => {
        setState(prevState => ({
            ...prevState,
            pin: pin,
        }));
    };

    return (
        <>
            <div className='keyboard'>
                <p className='title'>‎{pin.toString().slice(0,3-digit)}</p>
                {
                    teclado.map((numero) => {
                        return (
                            <button className='button'key={numero} onClick={() => {
                                if (digit >= 0) {
                                    setPin(pin + numero * Math.pow(10, digit));
                                    setDigit(digit - 1);
                                }
                            }}>
                                {numero}
                            </button>
                        );
                    })
                }

                <button className='button-cancel' onClick={()=>{setPin(0);setDigit(3)}}>
                    Repetir
                </button>
                <button className='button-accept' onClick={()=>{setPin(0);setDigit(3);handleButtonClick()}}>
                    Aceptar
                </button>
            </div>
        </>
    );
};