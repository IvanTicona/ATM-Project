import React, { useContext } from 'react';
import { KeyboardContext } from '../contexts/KeyboardContext';
import '../styles/Login.css'

export const Login = () => {
    const { state, setState } = useContext(KeyboardContext);

    const confirmarPIN = () => {
        if (state == 1234) {
            setState(9876)
        }
    };

    return (
        <>
            <div>
                <h1>Bienvenido a su propio ATM</h1>
                <h2>Ingrese su PIN:</h2>
            </div>
            <h1>
                {state.pin}
            </h1>
            <button className='boton' onClick={confirmarPIN()}>
                Ingresar
            </button>
        </>
    );
};