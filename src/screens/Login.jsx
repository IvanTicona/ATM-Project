import { useContext } from 'react';
import React, { useContext } from 'react';
import { useNavigate } from "react-router";
import { Keyboard } from '../components/Keyboard';
import { KeyboardContext } from '../contexts/KeyboardContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/Button.css'

export const Login = () => {
    let navigate = useNavigate();
    const { state, setState } = useContext(KeyboardContext);

    // TODO falta hacer la confirmación del PIN desde la BD Firebase
    const confirmarPIN = () => {
        if (state.pin == 1234) {
            notify("Ingreso exitoso. Bienvenido.")
            navigate("/operaciones")
        } else {
            notify("El pin ingresado no está registrado.")
        }
    };

    const notify = (message) => {
        toast(message, {
          autoClose: 5000,
          closeOnClick: true,
          progress: undefined, 
        });
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
            <ToastContainer />
            <Keyboard/>
        </>
    );
};