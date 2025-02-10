import { useContext } from 'react';
import { useNavigate } from "react-router";
import { Keyboard } from '../components/Keyboard';
import { KeyboardContext } from '../contexts/KeyboardContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/Button.css'
import '../styles/Login.css'

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
                <h3 className='title'>Bienvenido a su propio ATM</h3>
                <h3 className='title'>Ingrese su PIN:</h3>
            </div>
            <h1 className='pin-container'>
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