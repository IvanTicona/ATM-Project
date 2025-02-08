import React, { useContext } from 'react';
import { KeyboardContext } from '../contexts/KeyboardContext';

export const Login = () => {
    const { state, setState } = useContext(KeyboardContext);

    const confirmarPIN = () => {
        {/* TODO implementar el ingreso del PIN por teclado*/}
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
            <button onClick={confirmarPIN}>
                Ingresar
            </button>
        </>
    );
};