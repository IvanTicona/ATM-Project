import React, { useContext } from 'react';
import { useNavigate } from "react-router";
import { Keyboard } from '../components/Keyboard';
import { KeyboardContext } from '../contexts/KeyboardContext';
import '../styles/Button.css'

export const Login = () => {
    let navigate = useNavigate();
    const { state, setState } = useContext(KeyboardContext);

    // TODO falta hacer la confirmación del PIN desde la BD Firebase
    const confirmarPIN = () => {
        if (state.pin == 1234) {
            console.log("Pin confirmado")
            navigate("/operaciones")
        } else {
            console.log("Pin rechazado")
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
            <button className='boton' onClick={() => confirmarPIN()}>
                <h3 className='texto'>Ingresar</h3>
            </button>

            <Keyboard/>
        </>
    );
};